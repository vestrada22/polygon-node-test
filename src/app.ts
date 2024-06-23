import { Server } from './application/server'
import { environments } from './config/environments'
import { AppRoutes } from './application/routes'

(async () => {
    main()
})()

async function main() {

    new Server({
        port: environments.PORT,
        routes: AppRoutes.routes
    }).start()
}