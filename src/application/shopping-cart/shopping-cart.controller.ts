import { Request, Response } from 'express'
import { ShoppingCartRepository } from '../../domain/repositories/shopping-cart.repository'
import { AddToCart } from '../../domain/use-cases/shopping-cart/add-to-cart'
import { AddToCartDto } from '../../domain/dto/shopping-cart/add-to-cart.dto'
import { CartDetails, RemoveFromCartDto, removeFromCart } from '../../domain'
import { CompletePurchase } from '../../domain/use-cases/shopping-cart/complete-purchase'

export class ShoppingCartController {
    constructor(private readonly repository: ShoppingCartRepository) { }

    addToCart(req: Request, res: Response) {

        const [error, addToCartDto] = AddToCartDto.create(req.body)

        if (error) {
            return res.status(400).json({ error })
        }

        new AddToCart(this.repository)
            .execute(addToCartDto!)
            .then(cart => res.status(200).json(cart))
            .catch(err => res.status(400).json(err))
    }

    removeFromCart(req: Request, res: Response) {
        const [error, removeFromCartDto] = RemoveFromCartDto.create(req.body)

        if (error) {
            return res.status(400).json({ error })
        }

        new removeFromCart(this.repository)
            .execute(removeFromCartDto!)
            .then(cart => res.status(200).json(cart))
            .catch(err => res.status(400).json(err))
    }

    cartDetails(req: Request, res: Response) {
        const { cartId } = req.params
        new CartDetails(this.repository)
            .execute(+cartId)
            .then(cart => res.status(200).json(cart))
            .catch(err => res.status(400).json(err))
    }

    completePurchase(req: Request, res: Response) {
        const { cartId } = req.body
        new CompletePurchase(this.repository)
            .execute(+cartId)
            .then(cart => res.status(201).json('Purchase completed!'))
            .catch(err => res.status(400).json(err))
    }
}