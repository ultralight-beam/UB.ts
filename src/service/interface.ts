import {IUBMessage} from "../message";
import {UBID} from "../types/service";

export interface IService {
  _type: UBID;
  handle(msg: IUBMessage): void;
}
