import {IUBMessage} from "../message";
import {UBID} from "../types";
import {IService} from "./interface";

const ADVERTISE: UBID = [0];

export interface Advertise {
  create(from: string, to: string, protocols: UBID[]): IUBMessage;
}

export class Advertise implements IService, Advertise {
  public _type = ADVERTISE;

  public static create(from: string, to: string, protocols: UBID[]): IUBMessage {
    return {
      proto: ADVERTISE,
      from,
      to,
      message: Buffer.from(protocols.toString())
    };
  }

  public handle(msg: IUBMessage): void {}
}
