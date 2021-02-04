import express from "express";
import Server from "./base/Server.js";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet"
import { ExtractionController } from "./extraction/Extraction.js"

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
    console.log("am here")
    server.loadMiddleware(globalMiddleware);
    server.loadControllers(controllers);
    server.run();
}).catch(() => {
    "Unable to run the app"
})