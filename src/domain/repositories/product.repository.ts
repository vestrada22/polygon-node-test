import { ProductDto } from '../dto/product/product.dto'
import { ProductEntity } from '../entities/product.entity'
import { SalesByCategoryAndMonthEntity } from '../entities/sales-by-category-and-month.entity'

export abstract class ProductRepository {

    abstract getSalesByCategoryAndMonth(): Promise<SalesByCategoryAndMonthEntity[]>
    abstract create(productDto: ProductDto): Promise<ProductEntity>
    abstract findAll(): Promise<ProductEntity[]>
    abstract findOne(id: number): Promise<ProductEntity>
    abstract findMany(name: string): Promise<ProductEntity[]>

}