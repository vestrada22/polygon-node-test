import { ProductDto } from '../../dto'
import { ProductEntity } from '../../entities/product.entity'
import { ProductRepository } from '../../repositories/product.repository'

export interface AddProductToCartUseCase {
    execute(productDto: ProductDto): Promise<void>
}

export class AddProductToCart implements AddProductToCartUseCase {

    constructor(private readonly repository: ProductRepository) { }

    execute(productDto: ProductDto): Promise<void> {
        return this.repository.addProductToCart(productDto)
    }

}