import { LogLevel } from "../enums/LogLevel";
import TransportModule from "./TransportModule";
export default interface Transport {
  module: TransportModule;
  levels?: LogLevel[];
}
