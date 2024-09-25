// src/inversify.config.ts
import { Container } from "inversify";
import { ILogger } from "./interfaces/ILogger";
import { ConsoleLogger } from "./services/ConsoleLogger";

const container = new Container();
container.bind<ILogger>("ILogger").to(ConsoleLogger);

export { container };
