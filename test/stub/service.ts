import {IService} from "../../src/service";
import { UBID } from "../../src/types";

export class ServiceStub implements IService {
    public _type: UBID = [0,1,2];
    public handle(): void {};
}