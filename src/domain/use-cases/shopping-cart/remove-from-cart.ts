import { RemoveFromCartDto } from '../../dto'
import { ShoppingCartEntity } from '../../entities/shopping-cart.entity'
import { ShoppingCartRepository } from '../../repositories/shopping-cart.repository'

export interface RemoveFromCartUseCase {
    execute(removeFromCartDto: RemoveFromCartDto): Promise<ShoppingCartEntity | null>
}

export class removeFromCart implements RemoveFromCartUseCase {

    constructor(private readonly repository: ShoppingCartRepository) { }

    execute(removeFromCartDto: RemoveFromCartDto): Promise<ShoppingCartEntity | null> {
        return this.repository.removeProductFromCart(removeFromCartDto)
    }

}