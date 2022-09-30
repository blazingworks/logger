<div align="center">

# @blazingworks/logger

![Lines of code](https://img.shields.io/tokei/lines/github/blazingworks/logger?style=for-the-badge)
![npm Downloads](https://img.shields.io/npm/dy/@blazingworks/logger?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/blazingworks/logger?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/blazingworks/logger?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/blazingworks/logger?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/blazingworks/logger?style=for-the-badge)
![npm Version](https://img.shields.io/npm/v/@blazingworks/logger?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/blazingworks/logger?style=for-the-badge)

</div>

🌍 Hello World NPM Library by BlazingWorks, acts as a boilerplate for future libraries

## Tech Stack

-   [TypeScript](https://www.typescriptlang.org/)
-   [Jest](https://jestjs.io/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)

## Installation

### NPM

```bash
npm install @blazingworks/logger
```

### Yarn

```bash
yarn add @blazingworks/logger
```

## Usage

### TypeScript

```typescript
import { Logger, ConsoleTransport } from "@blazingworks/logger";

const logger = new Logger({
    transports: [{ module: new ConsoleTransport() }],
});

logger.info("Hello World");
```

### JavaScript

```javascript
const { Logger, ConsoleTransport } = require("@blazingworks/logger");

const logger = new Logger({
    transports: [{ module: new ConsoleTransport() }],
});

logger.info("Hello World");
```

### Transports

The logger comes with various kinds of transports. You can find more about them [here](https://github.com/blazingworks/logger/blob/main/TRANSPORTS.md).

## How to report issues/questions

-   For general issues/questions, [open an issue](https://github.com/blazingworks/logger/issues)
-   For security issues, please email [security@blazing.works](mailto:security@blazing.works)
-   For important questions, please email [opensource@blazing.works](mailto:opensource@blazing.works)

## License

As this is an open-source project, support is limited. Please use [GitHub Issues](https://github.com/blazingworks/logger/issues) for community support or contact [opensource@blazing.works](mailto:opensource@blazing.works) for very important matters.

**ℹ️ All code in this repository is licensed under the [MIT License](LICENSE.md).**
