import {UBID} from "../types";
import {IService} from "../service";
import {ITransport} from "../transport";
import {IUBMessage} from "../message";

export interface INode {
  _services: Map<UBID, IService>;
  _transports: Map<string, ITransport>;
  addService(service: IService): void;
  removeService(service: IService): void;
  addTransport(transport: ITransport): void;
  removeTransport(transport: ITransport): void;
}

export class Node implements INode {
  public _services: Map<UBID, IService> = new Map();
  public _transports: Map<string, ITransport> = new Map();
  public constructor(services: IService[], transports: ITransport[]) {
    services.forEach((s: IService) => {this.addService(s);});
    transports.forEach((t: ITransport) => {this.addTransport(t);});
  }

  public addService(service: IService): void {
    if (this._services.has(service._type)) return;
    this._services.set(service._type, service);
  }

  public removeService(service: IService): void {
    if (!this._services.has(service._type)) return;
    this._services.delete(service._type);
  }

  public addTransport(transport: ITransport): void {
    if (this._transports.has(transport.constructor.name)) return;
    // TODO listen needs to be an event emitter
    transport.listen((msg: IUBMessage) => {
      const service = this._services.get(msg.proto);
      if (service === undefined) return;
      service.handle(msg);
    });
    this._transports.set(transport.constructor.name, transport);
  }

  public removeTransport(transport: ITransport): void {
    if (!this._transports.has(transport.constructor.name)) return;
    this._transports.delete(transport.constructor.name);
  }
}
