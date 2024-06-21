import { ProductDto } from "../../dto";
import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product.repository";

export interface ProductsListUseCase {
    execute(): Promise<ProductEntity[]>
}

export class ProductsList implements ProductsListUseCase {

    constructor(private readonly repository: ProductRepository) { }

    execute(): Promise<ProductEntity[]> {
        return this.repository.findAll()
    }

}