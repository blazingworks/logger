# Transports

## Official Transports

-   [ConsoleTransport](#ConsoleTransport)
-   [RawTransport](#RawTransport)
-   [CustomTransport](#CustomTransport)
-   [FileTransport](#FileTransport)
-   [PrettyConsoleTransport](#PrettyConsoleTransport)

### ConsoleTransport

The `ConsoleTransport` is a transport that logs to the console. It is included in the package.

#### Usage

```typescript
// ...
const logger = new Logger({
    transports: [{ module: new ConsoleTransport("[%l] %m") }],
});
// ...
```

#### Options

| Name   | Type   | Default   | Description                    |
| :----- | :----- | :-------- | :----------------------------- |
| format | string | "[%l] %m" | The format of the log message. |

### RawTransport

The `RawTransport` is a transport that logs to the console in JSON format without any customization. It is included in the package.

#### Usage

```typescript
// ...
const logger = new Logger({
    transports: [{ module: new RawTransport() }],
});
// ...
```

### CustomTransport

The `CustomTransport` is a transport that logs to a custom function. It is included in the package.

#### Usage

```typescript
// ...
const logger = new Logger({
    transports: [
        {
            module: new CustomTransport((level, message) => {
                // ...
            }),
        },
    ],
});
```

### FileTransport

The `FileTransport` will be transport that logs to a file. It is currently not yet available and will be included in the package.

### PrettyConsoleTransport

The `PrettyConsoleTransport` will be transport that logs to the console in a pretty format. It is currently not yet available and will be made available through an external package.

#### Options

| Name   | Type     | Default | Description                                                               |
| :----- | :------- | :------ | :------------------------------------------------------------------------ |
| format | function |         | The function to log the message. It takes in a message string and a level |

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
