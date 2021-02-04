export default class Server {
    app;
    port;

    constructor(app, port) {
        this.app = app;
        this.port = port;
    }

    run() {
        return this.app.listen(this.port, () => {
            console.log(`
                -------------------------------------------------
                Server started! Express: http://localhost:${this.port}
                -------------------------------------------------
                `);
        });
    }

    loadMiddleware(middlewares) {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }

    loadControllers(controllers) {
        controllers.forEach(controller => {
            this.app.use(controller.path, controller.setRoutes())
        })
    }
}