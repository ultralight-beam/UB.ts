import {IUBMessage, UBID} from "../message";

export interface IService {
  type: UBID;
  IHandle(msg: IUBMessage): void;
}
