import express from "express";
import Server from "./base/Server.js";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet"
import { ExtractionController } from "./controllers/ExtractionController.js"

const app = express();
const server = new Server(app, 3000);
const controllers = [
    new ExtractionController()
]

const globalMiddleware = [
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    cors({ credentials: true, origin: true }),
    helmet()
];

Promise.resolve().then(() => {
    server.loadMiddleware(globalMiddleware);
    server.loadControllers(controllers);
    server.run();
}).catch(() => {
    "Unable to run the app"
})