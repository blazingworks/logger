import Logger from "../src/Logger";
import ConsoleTransport from "../src/transports/ConsoleTransport";

test(`Info Log`, () => {
  const logSpy = jest.spyOn(console, "log");

  const logger = new Logger({
    transports: [{ module: new ConsoleTransport() }],
  });

  logger.info("My name is Sakuko Akiyama!");

  expect(logSpy).toHaveBeenNthCalledWith(1, "[info] My name is Sakuko Akiyama!");
});

test(`Warn Log`, () => {
  const logSpy = jest.spyOn(console, "log");

  const logger = new Logger({
    transports: [{ module: new ConsoleTransport() }],
  });

  logger.warn("My name is Reiji Kurose!");

  expect(logSpy).toHaveBeenNthCalledWith(2, "[warn] My name is Reiji Kurose!");
});

test(`Error Log`, () => {
  const logSpy = jest.spyOn(console, "log");

  const logger = new Logger({
    transports: [{ module: new ConsoleTransport() }],
  });

  logger.error("My name is Nagi Aoe!");

  expect(logSpy).toHaveBeenNthCalledWith(3, "[error] My name is Nagi Aoe!");
});

test(`Fatal Log`, () => {
  const logSpy = jest.spyOn(console, "log");

  const logger = new Logger({
    transports: [{ module: new ConsoleTransport() }],
  });

  logger.fatal("My name is Gen Minegishi!");

  expect(logSpy).toHaveBeenNthCalledWith(4, "[fatal] My name is Gen Minegishi!");
});

test(`Debug Log`, () => {
  const logSpy = jest.spyOn(console, "log");

  const logger = new Logger({
    transports: [{ module: new ConsoleTransport() }],
  });

  logger.debug("My name is Yuri Shibasawa!");

  expect(logSpy).toHaveBeenNthCalledWith(5, "[debug] My name is Yuri Shibasawa!");
});

test(`Access Log`, () => {
  const logSpy = jest.spyOn(console, "log");

  const logger = new Logger({
    transports: [{ module: new ConsoleTransport() }],
  });

  logger.access("My name is Yuko Kurose!");

  expect(logSpy).toHaveBeenNthCalledWith(6, "[access] My name is Yuko Kurose!");
});

test(`Custom formatting`, () => {
  const logSpy = jest.spyOn(console, "log");

  const logger = new Logger({
    transports: [{ module: new ConsoleTransport("%m / (%l)") }],
  });

  logger.log("My name is Kousaku Esemori!");

  expect(logSpy).toHaveBeenNthCalledWith(7, "My name is Kousaku Esemori! / (info)");
});
