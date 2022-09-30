import { allLogLevels, LogLevel } from "./enums/LogLevel";
import LoggerOptions from "./interfaces/LoggerOptions";
import Transport from "./interfaces/Transport";

export default class Logger {
    private transports: Transport[] = [];

    constructor(options: LoggerOptions) {
        options.transports.forEach((transport) => {
            if (!transport.levels) transport.levels = allLogLevels();
            this.transports.push(transport);
        });
    }

    log(message: string, level: LogLevel = LogLevel.Info) {
        this.transports.forEach((transport) => {
            if (transport.levels?.includes(level)) {
                transport.module.handle(message, level);
            }
        });
    }

    info(message: string) {
        this.log(message, LogLevel.Info);
    }

    warn(message: string) {
        this.log(message, LogLevel.Warn);
    }

    error(message: string) {
        this.log(message, LogLevel.Error);
    }

    fatal(message: string) {
        this.log(message, LogLevel.Fatal);
    }

    debug(message: string) {
        this.log(message, LogLevel.Debug);
    }

    access(message: string) {
        this.log(message, LogLevel.Access);
    }
}
