import { ShoppingCartRepository } from "../../repositories/shopping-cart.repository";

export interface CompletePurchaseUseCase {
    execute(cartId: number): Promise<void>
}

export class CompletePurchase implements CompletePurchaseUseCase {

    constructor(private readonly repository: ShoppingCartRepository) { }

    execute(cartId: number): Promise<void> {
        return this.repository.completePurchase(cartId)
    }
}