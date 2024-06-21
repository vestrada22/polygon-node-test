import { ProductEntity } from '../../entities/product.entity'
import { ProductRepository } from '../../repositories/product.repository'

export interface SearchProductUseCase {
    execute(name: string): Promise<ProductEntity[]>
}

export class SearchProduct implements SearchProductUseCase {

    constructor(private readonly repository: ProductRepository) { }

    execute(name: string): Promise<ProductEntity[]> {
        return this.repository.findMany(name)
    }

}