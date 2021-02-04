import {Controller} from "../base/Controller.js";
export class ExtractionController extends Controller{
    path = "/extractions";
    routes = [
        {
            path: "/match",
            method: "POST",
            handler: this.handleMatch,
        }
    ]

    constructor() {
        super();
    }

    async handleMatch (req, res, next) {
        try {
            super.sendSuccess(res, "hello", "success")
        } catch (error) {
            console.log(error);
            super.sendError(res);
            return;
        }
    }
}