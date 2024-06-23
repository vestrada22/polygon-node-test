import { Server } from './application/server'
import { environments } from './config/environments'
import { AppRoutes } from './application/routes'
import { setupSwagger } from './config/swagger'

(async () => {
    main()
})()

async function main() {

    const server = new Server({
        port: environments.PORT,
        routes: AppRoutes.routes
    })

    setupSwagger(server.getApp())

    server.start()
}