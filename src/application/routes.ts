import { Router } from 'express'
import { ProductRoutes } from './product/routes'
import { ShoppingCartRoutes } from './shopping-cart/routes'

export class AppRoutes {
    static get routes(): Router {
        const router = Router()
        router.use('/api/products', ProductRoutes.routes)
        router.use('/api/shopping-cart', ShoppingCartRoutes.routes)
        return router
    }
}