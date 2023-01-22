import { LogLevel } from "../enums/LogLevel";

export default interface TransportModule {
  handle(message: string, level: LogLevel): void;
}
