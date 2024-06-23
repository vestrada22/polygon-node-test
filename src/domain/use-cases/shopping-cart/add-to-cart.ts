import { AddToCartDto } from '../../dto'
import { ShoppingCartEntity } from '../../entities/shopping-cart.entity'
import { ShoppingCartRepository } from '../../repositories/shopping-cart.repository'

export interface AddToCartUseCase {
    execute(addToCartDto: AddToCartDto): Promise<ShoppingCartEntity | null>
}

export class AddToCart implements AddToCartUseCase {

    constructor(private readonly repository: ShoppingCartRepository) { }

    execute(addToCartDto: AddToCartDto): Promise<ShoppingCartEntity | null> {
        return this.repository.addToCart(addToCartDto)
    }

}