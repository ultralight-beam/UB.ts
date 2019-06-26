import {IUBMessage} from "../message";
import {DISCOVERY, UBID} from "../types";
import {IService} from "./interface";

export interface Discovery {
  create(from: string, to: string, protocols: UBID[]): IUBMessage;
}

export class Discovery implements IService, Discovery {
  public _type = DISCOVERY;

  public static create(from: string, to: string, protocols: UBID[]): IUBMessage {
    return {
      proto: DISCOVERY,
      from,
      to,
      message: Buffer.from(protocols.toString())
    };
  }

  public handle(msg: IUBMessage): void {}
}
