export interface INode {
  _services: Map<UBID, IService>;
    _transports: Map<string, ITransport>;
  addService(service: IService): void;
  removeService(service: UBID): void;
  addTransport(transport: ITransport): void;
  removeTransport(transport: string): void;
}

export class Node implements INode {
_services: Map<UBID, IService> = new Map();
  _transports: Map<string, ITransport> = new Map();
  constructor(services: []IService, transports: []ITransports){
    services.forEach((s: IService) => {this.addService(this._services.set(s.ubid, s))});
    transports.forEach((t: ITransport) => {this.addTransport(this._transports.set(t.constructor.name, t))});
  }
  
  public addService(service: IService): void {
    if (this._services.has(service.ubid)) return;
    this._services.set(service.ubid, service);
  }

  public removeService(service: IService): void {
    if (!this._services.has(service.ubid)) return;
    this._services.delete(service.ubid);
  }

  public addTransport(transport: Itransport): void {
    if (this._transports.has(transport.constructor.name)) return;
    transport.start();
    this._transports.set(transport.constructor.name, transport);
  }

  public removeTransport(transport: ITransport): void {
    if (!this._transports.has(transport.constructor.name)) return;
    transport.stop();
    this._transports.delete(transport.constructor.name);
  }
}
