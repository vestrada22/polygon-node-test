import { ShoppingCartDto } from "../../dto";
import { ShoppingCartRepository } from "../../repositories/shopping-cart.repository";

export interface CreateShoppingCartUseCase {
    execute(dto: ShoppingCartDto): Promise<void>
}

export class CreateShoppingCart implements CreateShoppingCartUseCase {

    constructor(private readonly repository: ShoppingCartRepository) { }

    execute(dto: ShoppingCartDto): Promise<void> {
        return this.repository.create(dto)
    }

}