export type UBID = string;

export interface IUBMessage {
  protocol: UBID;
  from: string;
  to: string;
  message: Buffer;
}
