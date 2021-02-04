export default class Server {
    app;
    port;

    constructor(app, port){
        this.app = app;
        this.port = port;
    }

    run(){
        return this.app.listen(this.port, () => {
            console.log(`The server is running on port ${this.port}`);
        });
    }

    loadMiddleware(middlewares){
        console.log("am in mw")
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }

    loadControllers(controllers){
        controllers.forEach(controller => {
            console.log(controller.path)
            this.app.use(controller.path, controller.setRoutes())
        })
    }
}