import {ITransport, TransportStatus} from "../../src/transport";
import {IUBMessage} from "../../src/message";

export class TransportStub implements ITransport {
  public _status: TransportStatus;
  public send(message: IUBMessage): void {};
  public listen(): void {};
}
