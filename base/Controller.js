import { Router } from "express";
export class Controller {
    router = Router();
    path;
    routes;

    setRoutes(){
        console.log("setr")
        for(const route of this.routes){
            console.log(route)
            // for(const mw of route.localMiddleware){
            //     this.routes.use(route.path, mw);
            // }
            switch (route.method){
                case "GET":
                    this.router.get(route.path, route.handler);
                    break;
                case "POST":
                    this.router.post(route.path, route.handler);
                    break;
                case "PUT":
                    this.router.put(route.path, route.handler);
                    break;
                case "DELETE":
                    this.router.delete(route.path, route.handler);
                    break;
                default:
                    console.log("not a valid method");
                    break;
            }
        }
        return this.router;
    }

    sendSuccess(res, data, message){
        return res.status(200).json({
            message: message || "success",
            data: data
        });
    };

    sendError(res, message){
        return res.status(500).json({
            message: message || "internal server error",
        });
    };

}