import { ProductEntity } from '../../entities/product.entity'
import { ProductRepository } from '../../repositories/product.repository'

export interface ProductDetailsUseCase {
    execute(id: number): Promise<ProductEntity>
}

export class ProductDetails implements ProductDetailsUseCase {

    constructor(private readonly repository: ProductRepository) { }

    execute(id: number): Promise<ProductEntity> {
        return this.repository.findOne(id)
    }

}