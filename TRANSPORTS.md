# Transports

## Table of Contents

- [Integrated Transports](#integrated-transports)
  - [ConsoleTransport](#consoletransport)
  - [RawTransport](#rawtransport)
  - [~~CustomTransport~~](#customtransport) (deprecated)
  - [FileTransport](#filetransport) (not yet available)
- [Official External Transports](#official-external-transports)
  - [PrettyConsoleTransport](#prettyconsoletransport)
  - [DiscordTransport](#discordtransport) (not yet available)
  - [SlackTransport](#slacktransport) (not yet available)
  - [LogSnagTransport](#logsnagtransport) (not yet available)
  - [LogtailTransport](#logtailtransport) (not yet available)
- [Community Transports](#community-transports) (none yet)
- [How to add a transport](#how-to-add-a-transport)

## Integrated Transports

### ConsoleTransport

The `ConsoleTransport` is a transport that logs to the console.

#### Usage

```typescript
const logger = new Logger({
  transports: [{ module: new ConsoleTransport("[%l] %m") }],
});
```

Here, `%l` would be replaced with the log level and `%m` would be replaced with the message.

### RawTransport

The `RawTransport` is a transport that logs to the console in JSON format without any customization.

#### Usage

```typescript
const logger = new Logger({
  transports: [{ module: new RawTransport() }],
});
```

The output of this would look like this for example:

```json
{ "message": "Hello World", "level": "info" }
```

### ~~CustomTransport~~

The `CustomTransport` can log to a custom function. It is deprecated and instead, you should [add a custom transport class](#how-to-add-a-transport).

### FileTransport

The `FileTransport` will be a transport that logs to a file. It is currently not yet available but will be included in the package.

## Official External Transports

### PrettyConsoleTransport

The `PrettyConsoleTransport` is a transport that logs to the console in a pretty format. It is available through `@blazingworks/logger-transport-prettyconsole`.

#### Usage

```typescript
import PrettyConsoleTransport from "@blazingworks/logger-transport-prettyconsole";

const logger = new Logger({
  transports: [
    {
      module: new PrettyConsoleTransport({
        levelColorStyle: "bg", // "bg" or "text"
        timestampColorStyle: "bg", // "bg" or "text"
        levelTextStyle: "allCaps", // "allCaps", "firstLetterCaps" or "allLowercase"
        timestamp: "unformatted", // "unformatted" or "none"
        surroundTimestamp: "spaces", // see https://github.com/blazingworks/utils/blob/24642afba20a08df2bff0253fda70e9fbbb7f474/src/text.ts#L30
        surroundLevel: "brackets", // see above
        useColon: true, // true or false
      }),
    },
  ],
});
```

### DiscordTransport

The `DiscordTransport` will be a transport that logs to a Discord webhoo. It will be available through `@blazingworks/logger-transport-discord`.

### SlackTransport

The `SlackTransport` will be a transport that logs to a Slack webhook. It will be available through `@blazingworks/logger-transport-slack`.

### LogSnagTransport

The `LogSnagTransport` will be a transport that logs to LogSnag. It will be available through `@blazingworks/logger-transport-logsnag`.

### LogtailTransport

The `LogtailTransport` will be a transport that logs to Logtail. It will be available through `@blazingworks/logger-transport-logtail`.

## Community Transports

There are no community transports right now. Feel free to add yours through a PR! :)

## How to add a transport

To add a transport, you need to create a class that implements the [`TransportModule`](https://github.com/blazingworks/logger/blob/main/src/interfaces/TransportModule.ts) interface.

Below, you can find an example transport based on the `ConsoleTransport` for reference:

```typescript
import { LogLevel } from "@blazingworks/logger/enums";
import { TransportModule } from "@blazingworks/logger/interfaces";

export default class MyCoolConsoleTransport implements TransportModule {
  private format: string;

  constructor(format = "(%l): %m") {
    this.format = format;
  }

  handle(message: string, level: LogLevel): void {
    console.log(this.format.replace("%l", level).replace("%m", message));
  }
}
```
