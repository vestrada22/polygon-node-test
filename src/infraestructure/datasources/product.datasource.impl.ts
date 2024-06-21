import { prisma } from "../../data/postgres";
import { ProductDatasource, ProductDto, ProductEntity } from "../../domain";

export class ProductDatasourceImpl implements ProductDatasource {

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

    findMany(name: string): Promise<ProductEntity[]> {
        const products = prisma.product.findMany({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive',
                },
            },
        })
        return products
        .then(products => products.map(product => ProductEntity.objectMapper(product)))
        .catch(err => { throw new Error(err) })
    }

}