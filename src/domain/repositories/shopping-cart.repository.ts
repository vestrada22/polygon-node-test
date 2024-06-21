import { ShoppingCartDto } from "../dto";
import { ShoppingCartEntity } from "../entities/shopping-cart.entity";

export abstract class ShoppingCartRepository {

    abstract create(shoppingCartDto: ShoppingCartDto): Promise<ShoppingCartEntity>
    abstract addProductToCart(shoppingCartDto: ShoppingCartDto): Promise<void>
    abstract findById(id: number): Promise<ShoppingCartEntity | null>
    
}