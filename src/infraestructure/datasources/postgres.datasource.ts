import { PrismaClient } from '@prisma/client';
import { ProductDatasource } from '../../domain/datasources/product.datasource';

const prismaClient = new PrismaClient()

export class PostgresProductDatasource implements ProductDatasource {

}