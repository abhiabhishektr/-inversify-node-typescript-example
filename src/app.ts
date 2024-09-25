// src/app.ts
import "reflect-metadata";
import { container } from "./inversify.config";
import { ILogger } from "./interfaces/ILogger";

const logger = container.get<ILogger>("ILogger");

logger.log("Inversify and TypeScript setup complete!");
