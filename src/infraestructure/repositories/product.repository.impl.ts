import { ProductDatasource, ProductEntity, ProductRepository } from '../../domain'
import { ProductDto } from '../../domain/dto/product/product.dto'

export class ProductRepositoryImpl implements ProductRepository {
   constructor(private readonly datasource: ProductDatasource) {
   }

   create(productDto: ProductDto): Promise<ProductEntity> {
      return this.datasource.create(productDto)
   }

   findAll(): Promise<ProductEntity[]> {
      return this.datasource.findAll()
   }

   findOne(id: number): Promise<ProductEntity> {
      return this.datasource.findOne(id)
   }
   
   findMany(name: string): Promise<ProductEntity[]> {
      return this.datasource.findMany(name)
   }

}