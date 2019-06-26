import {expect} from "chai";
import {TransportStub, ServiceStub} from "./stub";
import {Node, INode} from "../src/node";
import { ITransport, IService } from "../src";

describe("Node", () => {

    it("should add transport", () => {
        let node: INode = new Node();
        let transport: ITransport = new TransportStub();
        
        // Check that there are no transports
        expect(node._transports.size).to.be.equals(0);
        
        // Add the transport
        node.addTransport(transport);
        expect(node._transports.size).to.be.equals(1);
    });

    it("should remove transport", () => {
        let node: INode = new Node();
        let transport: ITransport = new TransportStub();
        
        // Check that the transport was added
        node.addTransport(transport);
        expect(node._transports.size).to.be.equals(1);
        
        // Remove transport
        node.removeTransport(transport);
        expect(node._transports.size).to.be.equals(0);
    });

    it("should add service", () => {
        let node: INode = new Node();
        let service: IService = new ServiceStub();

        // Check that there are no services
        expect(node._services.size).to.be.equals(0);

        // Add service
        node.addService(service);
        expect(node._services.size).to.be.equals(1);
    });

    it("should remove service", () => {
        let node: INode = new Node();
        let service: IService = new ServiceStub();

        // Check that the service was added
        node.addService(service);
        expect(node._services.size).to.be.equals(1);

        // Remove service
        node.removeService(service);
        expect(node._services.size).to.be.equals(0);
    });
});