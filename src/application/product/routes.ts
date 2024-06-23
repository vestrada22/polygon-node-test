import { Request, Response, Router } from 'express'
import { ProductController } from '../product/product-controller'
import { ProductDatasourceImpl } from '../../infraestructure/datasources/product.datasource.impl'
import { ProductRepositoryImpl } from '../../infraestructure/repositories/product.repository.impl'

export class ProductRoutes {

    static get routes(): Router {
        const router: Router = Router();

        const datasource = new ProductDatasourceImpl()
        const repository = new ProductRepositoryImpl(datasource)
        const controller = new ProductController(repository)

        router.post('/', (req: Request, res: Response) => controller.createProduct(req, res))
        router.get('/', (req: Request, res: Response) => controller.productsList(req, res))
        router.get('/details/:id', (req: Request, res: Response) => controller.getProductDetail(req, res))
        router.get('/search/:query', (req: Request, res: Response) => controller.searchProducts(req, res))

        return router
    }
}