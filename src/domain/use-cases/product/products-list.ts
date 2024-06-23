import { ProductEntity } from '../../entities/product.entity'
import { ProductRepository } from '../../repositories/product.repository'

export interface ProductsListUseCase {
    execute(): Promise<ProductEntity[]>
}

export class ProductsList implements ProductsListUseCase {

    constructor(private readonly repository: ProductRepository) { }

    async execute(): Promise<ProductEntity[]> {
        return await this.repository.findAll()
    }

}