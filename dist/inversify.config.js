"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
// src/inversify.config.ts
const inversify_1 = require("inversify");
const ConsoleLogger_1 = require("./services/ConsoleLogger");
const container = new inversify_1.Container();
exports.container = container;
container.bind("ILogger").to(ConsoleLogger_1.ConsoleLogger);
