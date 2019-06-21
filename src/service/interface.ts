import {IUBMessage} from "../message";
import {UBID} from "../constants/service";

export interface IService {
  _type: UBID;
  handle(msg: IUBMessage): void;
}
