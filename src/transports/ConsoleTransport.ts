import { LogLevel } from "../enums/LogLevel";
import TransportModule from "../interfaces/TransportModule";
export default class ConsoleTransport implements TransportModule {
    private format: string;

    constructor(format = "[%l] %m") {
        this.format = format;
    }

    handle(message: string, level: LogLevel): void {
        console.log(this.format.replace("%l", level).replace("%m", message));
    }
}
