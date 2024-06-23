import { ShoppingCartEntity } from '../../entities/shopping-cart.entity'
import { ShoppingCartRepository } from '../../repositories/shopping-cart.repository'

export interface CartDetailsUseCase {
    execute(id: number): Promise<ShoppingCartEntity | null>
}

export class CartDetails implements CartDetailsUseCase {

    constructor(private readonly repository: ShoppingCartRepository) { }

    execute(id: number): Promise<ShoppingCartEntity | null> {
        return this.repository.cartDetails(id)
    }

}