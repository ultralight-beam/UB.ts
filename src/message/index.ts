import {UBID} from "../types/service";

export interface IUBMessage {
  proto: UBID;
  to: string;
  from: string;
  message: Buffer;
}
