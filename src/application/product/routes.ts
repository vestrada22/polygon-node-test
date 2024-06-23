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

        /**
         * @swagger
         * /api/products:
         *   post:
         *     summary: Create products
         *     responses:
         *       200:
         *         description: create new products.
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/ProductDto'
         *       400:
         *         description: Bad request.
         */
        router.post('/', (req: Request, res: Response) => controller.createProduct(req, res))

        /**
         * @swagger
         * /api/products:
         *   get:
         *     summary: List all products
         *     responses:
         *       200:
         *         description: A list of products.
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/ProductDto'
         *       400:
         *         description: Bad request.
         */
        router.get('/', (req: Request, res: Response) => controller.productsList(req, res))

        /**
         * @swagger
         * /api/products/details/{id}:
         *   get:
         *     summary: Get product details
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: integer
         *         description: Product ID
         *     responses:
         *       200:
         *         description: Product details
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/ProductDto'
         *       400:
         *                description: Bad request
         *       404:
         *         description: Product not found
         */
        router.get('/details/:id', (req: Request, res: Response) => controller.getProductDetail(req, res))

        /**
         * @swagger
         * /api/products/search/{query}:
         *   get:
         *     summary: Search products
         *     parameters:
         *       - in: path
         *         name: query
         *         required: true
         *         schema:
         *           type: string
         *         description: Search query
         *     responses:
         *       200:
         *         description: A list of products that match the query.
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/ProductDto'
         *       400:
         *         description: Bad request.
         */
        router.get('/search/:query', (req: Request, res: Response) => controller.searchProducts(req, res))

        return router
    }
}