import {UBID} from "../constants/service";

export interface IUBMessage {
  protocol: UBID;
  from: string;
  to: string;
  message: Buffer;
}
