export interface IService {
  type: UBID;
  handle: IHandle;
}

export type IHandle = (msg: UBMessage): void;
