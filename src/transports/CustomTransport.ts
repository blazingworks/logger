import { LogLevel } from "../enums/LogLevel";
import TransportModule from "../interfaces/TransportModule";
export default class CustomTransport implements TransportModule {
    private handler: (message: string, level: LogLevel) => void;

    constructor(handler: (message: string, level: LogLevel) => void) {
        this.handler = handler;
    }

    handle(message: string, level: LogLevel): void {
        this.handler(message, level);
    }
}
