import {IUBMessage} from "../message";
import {DISCOVERY, UBID} from "../types/service";
import {IService} from "./interface";

export interface Discovery {
  create(from: string, to: string, protocols: UBID[]): IUBMessage;
}

export class Discovery implements IService {
  public _type: UBID;
  constructor() {
    this._type = DISCOVERY;
  }

  public static create(from: string, to: string, protocols: UBID[]): IUBMessage {
    return {
      proto: this._type,
      from,
      to,
      message: Buffer.from(protocols.toString())
    };
  }

  public handle(msg: IUBMessage): void {}
}
