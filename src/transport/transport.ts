import {EventEmitter} from "events";
import {IUBMessage} from "../message";

export interface ITransport extends EventEmitter {
  send(message: IUBMessage): void;
  listen(): void;
}

// export class Transport extends EventEmitter {
//   constructor() {
//     super();
//     this.on('SEND_MESSAGE', this.sendMessage.bind(this));
//   }
// }
