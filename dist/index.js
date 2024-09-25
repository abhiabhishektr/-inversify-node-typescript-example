"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const inversify_config_1 = require("./inversify.config");
const app = (0, express_1.default)();
const logger = inversify_config_1.container.get("ILogger");
app.get("/", (req, res) => {
    logger.log("Handling request");
    res.send("Hello from Express with Inversify!");
});
app.listen(3000, () => logger.log("Server started on port 3000"));
