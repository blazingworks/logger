import Logger from "../src/Logger";
import { LogLevel } from "../src/enums/LogLevel";
import CustomTransport from "../src/transports/CustomTransport";

test(`Info Log`, () => {
  const logs: { message: string; level: LogLevel; fullMessage: string }[] = [];

  const logger = new Logger({
    transports: [
      {
        module: new CustomTransport((message, level) => {
          logs.push({ message, level, fullMessage: `[${level}] ${message}` });
        }),
      },
    ],
  });

  logger.info("My name is Sakuko Akiyama!");

  expect(logs).toEqual([{ message: "My name is Sakuko Akiyama!", level: LogLevel.Info, fullMessage: "[info] My name is Sakuko Akiyama!" }]);
});

test(`Warn Log`, () => {
  const logs: { message: string; level: LogLevel; fullMessage: string }[] = [];

  const logger = new Logger({
    transports: [
      {
        module: new CustomTransport((message, level) => {
          logs.push({ message, level, fullMessage: `[${level}] ${message}` });
        }),
      },
    ],
  });

  logger.warn("My name is Reiji Kurose!");

  expect(logs).toEqual([{ message: "My name is Reiji Kurose!", level: LogLevel.Warn, fullMessage: "[warn] My name is Reiji Kurose!" }]);
});

test(`Error Log`, () => {
  const logs: { message: string; level: LogLevel; fullMessage: string }[] = [];

  const logger = new Logger({
    transports: [
      {
        module: new CustomTransport((message, level) => {
          logs.push({ message, level, fullMessage: `[${level}] ${message}` });
        }),
      },
    ],
  });

  logger.error("My name is Nagi Aoe!");

  expect(logs).toEqual([{ message: "My name is Nagi Aoe!", level: LogLevel.Error, fullMessage: "[error] My name is Nagi Aoe!" }]);
});

test(`Fatal Log`, () => {
  const logs: { message: string; level: LogLevel; fullMessage: string }[] = [];

  const logger = new Logger({
    transports: [
      {
        module: new CustomTransport((message, level) => {
          logs.push({ message, level, fullMessage: `[${level}] ${message}` });
        }),
      },
    ],
  });

  logger.fatal("My name is Gen Minegishi!");

  expect(logs).toEqual([{ message: "My name is Gen Minegishi!", level: LogLevel.Fatal, fullMessage: "[fatal] My name is Gen Minegishi!" }]);
});

test(`Debug Log`, () => {
  const logs: { message: string; level: LogLevel; fullMessage: string }[] = [];

  const logger = new Logger({
    transports: [
      {
        module: new CustomTransport((message, level) => {
          logs.push({ message, level, fullMessage: `[${level}] ${message}` });
        }),
      },
    ],
  });

  logger.debug("My name is Yuri Shibasawa!");

  expect(logs).toEqual([
    { message: "My name is Yuri Shibasawa!", level: LogLevel.Debug, fullMessage: "[debug] My name is Yuri Shibasawa!" },
  ]);
});

test(`Access Log`, () => {
  const logs: { message: string; level: LogLevel; fullMessage: string }[] = [];

  const logger = new Logger({
    transports: [
      {
        module: new CustomTransport((message, level) => {
          logs.push({ message, level, fullMessage: `[${level}] ${message}` });
        }),
      },
    ],
  });

  logger.access("My name is Yuko Kurose!");

  expect(logs).toEqual([{ message: "My name is Yuko Kurose!", level: LogLevel.Access, fullMessage: "[access] My name is Yuko Kurose!" }]);
});
