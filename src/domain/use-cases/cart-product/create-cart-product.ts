import { CartProductRepository } from "../../repositories/cart-product.repository";
import { CartProductDto } from '../../dto/cart-product/cart-product-dto';

export interface CreateCartProductUseCase {
    execute(dto: CartProductDto): Promise<void>
}

export class CreateCartProduct implements CreateCartProductUseCase {

    constructor(private readonly repository: CartProductRepository) { }

    execute(dto: CartProductDto): Promise<void> {
        return this.repository.create(dto)
    }

}