import express, { Router, Express } from 'express'

interface Options {
    port?: number
    routes: Router
}

export class Server {

    private app = express();
    private readonly port: number
    private readonly routes: Router

    constructor(options: Options) {
        const { port = 3100, routes } = options
        this.port = port
        this.routes = routes
    }

    getApp(): Express {
        return this.app
    }

    async start() {

        this.app.use(express.json())

        this.app.use(this.routes)
        this.app.listen(this.port, () => console.log(`Server running on port ${this.port}`))
    }
}