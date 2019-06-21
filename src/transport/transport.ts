import {IUBMessage} from "../message";

export interface ITransport {
  send(message: IUBMessage): void;
  listen(): void;
}
