import { Request, Response } from "express";
import { ShoppingCartRepository } from "../../domain/repositories/shopping-cart.repository";
import { ShoppingCartDto } from "../../domain";
import { AddProductToCart } from '../../domain/use-cases/product/add-product-to-cart';

export class ShoppingCartController {
    constructor(private readonly repository: ShoppingCartRepository) { }

    addToCart(req: Request, res: Response) {
        const [error, shoppingCartDto] = ShoppingCartDto.create(req.body)
        if (error) {
            return res.status(400).json(error)
        }

        new AddProductToCart(this.repository).execute(shoppingCartDto!)
        .then(shoppingCart => res.json(shoppingCart))
        .catch(err => res.status(500).json(err))
    }
}