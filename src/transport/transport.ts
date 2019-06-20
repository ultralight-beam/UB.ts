import {EventEmitter} from "events";


export interface Transport extends EventEmitter {
  sendMessage(message: IUBMessage): void;
  listen(): void; 
}

export class Transport extends EventEmitter {
  constructor() {
    super();
    this.on('SEND_MESSAGE', this.sendMessage.bind(this));
  }
}
