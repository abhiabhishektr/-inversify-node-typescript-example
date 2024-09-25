// src/server.ts
import express from "express";
import "reflect-metadata";  // This is essential for Inversify to work
import { container } from "./inversify.config";
import { ILogger } from "./interfaces/ILogger";

const app = express();
const logger = container.get<ILogger>("ILogger");
logger.log("Inversify and TypeScript setup complete!");

app.get("/", (req, res) => {
  logger.log("Handling request");
  res.send("Hello from Express with Inversify!");
});

app.listen(3001, () => logger.log("Server started on port 3000"));
