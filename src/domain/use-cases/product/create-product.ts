import { ProductDto } from "../../dto";
import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product.repository";

export interface CreateProductUseCase {
    execute(dto: ProductDto): Promise<ProductEntity>
}

export class CreateProduct implements CreateProductUseCase {

    constructor(private readonly repository: ProductRepository) { }

    execute(dto: ProductDto): Promise<ProductEntity> {
        return this.repository.create(dto)
    }

}