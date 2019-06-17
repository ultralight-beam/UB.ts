export type UBID = string;

export interface Message {
  protocol: UBID;
  from: string;
  to: string;
  message: Buffer;
}
