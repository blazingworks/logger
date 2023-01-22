import { LogLevel } from "../enums/LogLevel";
import TransportModule from "../interfaces/TransportModule";
export default class RawTransport implements TransportModule {
  handle(message: string, level: LogLevel): void {
    console.log({ message, level });
  }
}
