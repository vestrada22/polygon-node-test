import { PrismaClient } from '@prisma/client'
import { Server } from './application/server'
import { environments } from './config/environments'
import { AppRoutes } from './application/routes'

(async () => {
    main()
})()

async function main() {

    const prisma = new PrismaClient()
    const newProduct = await prisma.product.create({
        data: {
            name: "Xbox",
            description: "Console of videogames",
            price: 3000,
            category: "Gaming"
        }
    })

    console.log({ newProduct })

    const server = new Server({
        port: environments.PORT,
        routes: AppRoutes.routes
    }).start()
}