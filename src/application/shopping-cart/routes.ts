import { Request, Response, Router } from 'express'
import { ShoppingCartController } from './shopping-cart.controller'
import { ShoppingCartDatasourceImpl, ShoppingCartRepositoryImpl } from '../../infraestructure'

export class ShoppingCartRoutes {

    static get routes(): Router {
        const router: Router = Router()

        const datasource = new ShoppingCartDatasourceImpl()
        const repository = new ShoppingCartRepositoryImpl(datasource)
        const controller = new ShoppingCartController(repository)

        router.post('/add', (req: Request, res: Response) => controller.addToCart(req, res))
        router.post('/remove', (req: Request, res: Response) => controller.removeFromCart(req, res))
        router.get('/:cartId', (req: Request, res: Response) => controller.cartDetails(req, res))

        return router
    }
}