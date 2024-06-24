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
         *  post:
         *    summary: Create a new product
         *    tags:
         *      - Product
         *    requestBody:
         *      required: true
         *      content:
         *        application/json:
         *          schema:
         *            $ref: '#/components/schemas/ProductDto'
         *    responses:
         *      '200':
         *        description: Product created successfully
         *        content:
         *          application/json:
         *            schema:
         *              $ref: '#/components/schemas/ProductDto'
         *      '400':
         *        description: Bad request
         *        content:
         *          application/json:
         *            schema:
         *              type: object
         *              properties:
         *                error:
         *                  type: string
         *                  example: Error message detailing what went wrong
         */
        router.post('/', (req: Request, res: Response) => controller.createProduct(req, res))

        /**
         * @swagger
         * /api/products:
         *  get:
         *    summary: List all products
         *    tags:
         *      - Product
         *    responses:
         *      '200':
         *        description: A list of products
         *        content:
         *          application/json:
         *            schema:
         *              type: array
         *              items:
         *                $ref: '#/components/schemas/ProductDto'
         *      '400':
         *        description: Bad request
         *        content:
         *          application/json:
         *            schema:
         *              type: object
         *              properties:
         *                error:
         *                  type: string
         *                  example: Error message detailing what went wrong
         */
        router.get('/', (req: Request, res: Response) => controller.productsList(req, res))

        /**
         * @swagger
         * '/api/products/details/{id}':
         *   get:
         *     summary: Get product details
         *     tags:
         *       - Product
         *     parameters:
         *       - in: path
         *         name: id
         *         schema:
         *           type: integer
         *         required: true
         *         description: ID of the product
         *         example: 1
         *     responses:
         *       '200':
         *         description: Product details retrieved successfully
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/ProductDto'
         *       '400':
         *         description: Bad request
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 error:
         *                   type: string
         *                   example: Error message detailing what went wrong
         *       '404':
         *         description: Product not found
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 error:
         *                   type: string
         *                   example: Product not found
         */
        router.get('/details/:id', (req: Request, res: Response) => controller.getProductDetail(req, res))

        /**
         * @swagger
         * '/api/products/search/{query}':
         *   get:
         *     summary: Search for products
         *     tags:
         *       - Product
         *     parameters:
         *       - in: path
         *         name: query
         *         schema:
         *           type: string
         *         required: true
         *         description: Search query
         *         example: laptop
         *     responses:
         *       '200':
         *         description: Products found
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/ProductDto'
         *       '400':
         *         description: Bad request
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 error:
         *                   type: string
         *                   example: Error message detailing what went wrong
         */
        router.get('/search/:query', (req: Request, res: Response) => controller.searchProducts(req, res))

        /**
         * @swagger
         * /api/products/sales:
         *   get:
         *     summary: Get product sales by category and month
         *     tags:
         *       - Product
         *     responses:
         *       200:
         *         description: Sales data retrieved successfully.
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/ProductsSalesDto'
         *       '400':
         *         description: Bad request
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 error:
         *                   type: string
         *                   example: Error message detailing what went wrong
         */
        router.get('/sales', (req: Request, res: Response) => controller.getProductsSalesByCategoryAndMonth(req, res))

        return router
    }
}