import { AddToCartDto, RemoveFromCartDto } from '../dto'
import { ShoppingCartEntity } from '../entities/shopping-cart.entity'

export abstract class ShoppingCartDatasource {

    abstract addToCart(addToCartDto: AddToCartDto): Promise<ShoppingCartEntity | null>
    abstract removeProductFromCart(removeFromCartDto: RemoveFromCartDto): Promise<ShoppingCartEntity | null>
    abstract cartDetails(id: number): Promise<ShoppingCartEntity | null>

}