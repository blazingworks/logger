import Transport from "./Transport";

export default interface LoggerOptions {
    transports: Transport[];
    messageFunction?: (message: string) => string;
}
