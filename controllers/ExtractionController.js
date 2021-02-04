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
            console.log(req.body);
            const result = this.ExtractionService.math(parsedData);
            super.sendSuccess(res, result, "success")
        } catch (error) {
            console.log(error);
            super.sendError(res);
            return;
        }
    }
}