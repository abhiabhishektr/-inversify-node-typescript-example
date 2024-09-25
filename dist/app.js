"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
require("reflect-metadata");
const inversify_config_1 = require("./inversify.config");
const logger = inversify_config_1.container.get("ILogger");
logger.log("Inversify and TypeScript setup complete!");
