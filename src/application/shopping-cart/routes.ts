import { Request, Response, Router } from 'express'
import { ShoppingCartController } from './shopping-cart.controller'
import { ShoppingCartDatasourceImpl, ShoppingCartRepositoryImpl } from '../../infraestructure'

export class ShoppingCartRoutes {

    static get routes(): Router {
        const router: Router = Router()

        const datasource = new ShoppingCartDatasourceImpl()
        const repository = new ShoppingCartRepositoryImpl(datasource)
        const controller = new ShoppingCartController(repository)

        /**
         * @swagger
         * /api/shopping-cart/add:
         *   post:
         *     summary: Add a product to the shopping cart
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/AddToCartDto'
         *     tags:
         *      - Shopping Cart
         *     responses:
         *       200:
         *         description: Product added to the cart
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/ShoppingCartEntity'
         *       400:
         *         description: Bad request
         *       404:
         *         description: Product not found
        */
        router.post('/add', (req: Request, res: Response) => controller.addToCart(req, res))

        /**
         * @swagger
         * /api/shopping-cart/remove:
         *   post:
         *     summary: Remove a product from the shopping cart
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/RemoveFromCartDto'
         *     tags:
         *       - Shopping Cart
         *     responses:
         *       200:
         *         description: Product removed from the cart
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/ShoppingCartEntity'
         *       400:
         *         description: Bad request
         *       404:
         *         description: Shopping cart or product not found
        */
        router.post('/remove', (req: Request, res: Response) => controller.removeFromCart(req, res))

        /**
         * @swagger
         * /api/shopping-cart/{cartId}:
         *   get:
         *     summary: Get shopping cart details
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: integer
         *         description: Shopping Cart ID
         *     tags:
         *      - Shopping Cart
         *     responses:
         *       200:
         *         description: Shopping cart details
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/ShoppingCartEntity'
         *       400:
         *         description: Bad request
         *       404:
         *         description: Shopping cart not found
        */
        router.get('/:cartId', (req: Request, res: Response) => controller.cartDetails(req, res))

        /**
         * @swagger
         * /api/shopping-cart/complete-purchase:
         *   post:
         *     summary: Complete a purchase
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *              cartId: 1
         *     tags:
         *       - Shopping Cart
         *     responses:
         *       200:
         *         description: Purchase completed successfully
         *         content:
         *           application/json:
         *             schema:
         *              type: object
         *              properties:
         *                 message:
         *                   type: string
         *                   example: Purchase completed successfully
         *       400:
         *         description: Bad request
         *       404:
         *         description: Shopping cart not found
        */
        router.post('/complete-purchase', (req: Request, res: Response) => controller.completePurchase(req, res))

        return router
    }
}