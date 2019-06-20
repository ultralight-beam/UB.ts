import {Message, UBID} from "./interface";
import {DISCOVERY} from "./constants";

export function createDiscovery(
  from: string, 
  to: string, 
  protocols: UBID[] ): Message {
 
  return {
    protocol: DISCOVERY,
    from,
    to,
    message: Buffer.from(protocols.toString())
  }
}
