import { ShoppingCartEntity } from "../../entities/shopping-cart.entity";
import { ShoppingCartRepository } from "../../repositories/shopping-cart.repository";

export interface ShoppingCartDetailsUseCase {
    execute(id: number): Promise<ShoppingCartEntity | null>
}

export class ShoppingCartDetails implements ShoppingCartDetailsUseCase {

    constructor(private readonly repository: ShoppingCartRepository) { }

    execute(id: number): Promise<ShoppingCartEntity | null> {
        return this.repository.findById(id)
    }

}