import { AddToCartDto, RemoveFromCartDto } from '../dto'
import { ShoppingCartEntity } from '../entities/shopping-cart.entity'

export abstract class ShoppingCartRepository {

    abstract addToCart(addToCartDto: AddToCartDto): Promise<ShoppingCartEntity | null>
    abstract removeProductFromCart(removeFromCartDto: RemoveFromCartDto): Promise<ShoppingCartEntity | null>
    abstract cartDetails(id: number): Promise<ShoppingCartEntity | null>
    abstract completePurchase(cartId: number): Promise<void>

}