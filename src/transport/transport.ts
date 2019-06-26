import {IUBMessage} from "../message";

export enum TransportStatus {
  off,
  listening
}

export interface ITransport {
  _status: TransportStatus;
  send(message: IUBMessage): void;
  listen(message: IUBMessage): void;
}
