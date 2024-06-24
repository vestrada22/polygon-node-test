import { prisma } from '../../data/postgres'
import { ProductDatasource, ProductDto, ProductEntity, ProductsSalesDto } from '../../domain'
import { SalesByCategoryAndMonthEntity } from '../../domain/entities/sales-by-category-and-month.entity';

export class ProductDatasourceImpl implements ProductDatasource {

    async getSalesByCategoryAndMonth(): Promise<any[]> {
        const sales: ProductsSalesDto[] = await prisma.$queryRaw`SELECT 
        p.category,
        to_char(s."createdAt", 'YYYY-MM') as month,
        SUM(s.total) as totalSales
      FROM 
        "sales" s
      JOIN 
        "products" p ON s."productId" = p.id
      GROUP BY 
        p.category, month
      ORDER BY 
        p.category, month;`
        
        return sales.map((sale) => SalesByCategoryAndMonthEntity.objectMapper(sale))
    }

    async create(productDto: ProductDto): Promise<ProductEntity> {
        const product = await prisma.product.create({ data: productDto })
        return ProductEntity.objectMapper(product)
    }

    async findAll(): Promise<ProductEntity[]> {
        const products = await prisma.product.findMany()
        return products.map(product => ProductEntity.objectMapper(product))
    }

    async findOne(id: number): Promise<ProductEntity> {
        const product = await prisma.product.findFirst({ where: { id } })
        if (!product) throw new Error(`Product with id ${id} not found`)
        return ProductEntity.objectMapper(product)
    }

    async findMany(name: string): Promise<ProductEntity[]> {
        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive',
                },
            },
        })
        return products.map(product => ProductEntity.objectMapper(product))
    }

}