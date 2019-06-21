import {IUBMessage} from "../message";
import {DISCOVERY, UBID} from "../constants/service";
import {IService} from "./interface";

export interface Discovery {
  create(from: string, to: string, protocols: UBID[]): IUBMessage;
}

export class Discovery implements IService {
  public _type: UBID = DISCOVERY;

  public static create(from: string, to: string, protocols: UBID[]): IUBMessage {
    return {
      protocol: DISCOVERY,
      from,
      to,
      message: Buffer.from(protocols.toString())
    };
  }

  public handle(msg: IUBMessage): void {}
}
