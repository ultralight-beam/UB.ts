import {ITransport, TransportStatus} from "../../src/transport";
import {IUBMessage} from "../../src/message";

export class TransportStub implements ITransport {
    _status: TransportStatus;
    send(message: IUBMessage): void {};
    listen(): void {};
}