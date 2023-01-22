export enum LogLevel {
  Debug = "debug",
  Info = "info",
  Warn = "warn",
  Error = "error",
  Fatal = "fatal",
  Access = "access",
}

export function isLogLevel(level: string): level is LogLevel {
  return Object.values(LogLevel).includes(level as LogLevel);
}

export function getLogLevel(level: string): LogLevel {
  if (isLogLevel(level)) {
    return level;
  }
  return LogLevel.Info;
}

export function allLogLevels(): LogLevel[] {
  return Object.values(LogLevel);
}
