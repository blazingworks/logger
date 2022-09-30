import Logger from "../src/Logger";
import RawTransport from "../src/transports/RawTransport";
import { LogLevel } from "../src/enums/LogLevel";

test(`Info Log`, () => {
    const logSpy = jest.spyOn(console, "log");

    const logger = new Logger({
        transports: [{ module: new RawTransport() }],
    });

    logger.info("My name is Sakuko Akiyama!");

    expect(logSpy).toHaveBeenNthCalledWith(1, { message: "My name is Sakuko Akiyama!", level: LogLevel.Info });
});

test(`Warn Log`, () => {
    const logSpy = jest.spyOn(console, "log");

    const logger = new Logger({
        transports: [{ module: new RawTransport() }],
    });

    logger.warn("My name is Reiji Kurose!");

    expect(logSpy).toHaveBeenNthCalledWith(2, { message: "My name is Reiji Kurose!", level: LogLevel.Warn });
});

test(`Error Log`, () => {
    const logSpy = jest.spyOn(console, "log");

    const logger = new Logger({
        transports: [{ module: new RawTransport() }],
    });

    logger.error("My name is Nagi Aoe!");

    expect(logSpy).toHaveBeenNthCalledWith(3, { message: "My name is Nagi Aoe!", level: LogLevel.Error });
});

test(`Fatal Log`, () => {
    const logSpy = jest.spyOn(console, "log");

    const logger = new Logger({
        transports: [{ module: new RawTransport() }],
    });

    logger.fatal("My name is Gen Minegishi!");

    expect(logSpy).toHaveBeenNthCalledWith(4, { message: "My name is Gen Minegishi!", level: LogLevel.Fatal });
});

test(`Debug Log`, () => {
    const logSpy = jest.spyOn(console, "log");

    const logger = new Logger({
        transports: [{ module: new RawTransport() }],
    });

    logger.debug("My name is Yuri Shibasawa!");

    expect(logSpy).toHaveBeenNthCalledWith(5, { message: "My name is Yuri Shibasawa!", level: LogLevel.Debug });
});

test(`Access Log`, () => {
    const logSpy = jest.spyOn(console, "log");

    const logger = new Logger({
        transports: [{ module: new RawTransport() }],
    });

    logger.access("My name is Yuko Kurose!");

    expect(logSpy).toHaveBeenNthCalledWith(6, { message: "My name is Yuko Kurose!", level: LogLevel.Access });
});
