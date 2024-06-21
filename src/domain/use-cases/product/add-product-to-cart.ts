import { ProductDto } from '../../dto'
import { ShoppingCartRepository } from '../../repositories/shopping-cart.repository'
import { ShoppingCartDto } from '../../dto/shopping-cart/shopping-cart-dto';

export interface AddProductToCartUseCase {
    execute(shoppingCartDto: ShoppingCartDto): Promise<void>
}

export class AddProductToCart implements AddProductToCartUseCase {

    constructor(private readonly repository: ShoppingCartRepository) { }

    execute(shoppingCartDto: ShoppingCartDto): Promise<void> {
        return this.repository.addProductToCart(shoppingCartDto)
    }

}