import { prisma } from "../../data/postgres";
import { ShoppingCartDto } from "../../domain";
import { ShoppingCartDatasource } from "../../domain/datasources/shopping-cart.datasource";
import { ShoppingCartEntity } from "../../domain/entities/shopping-cart.entity";

export class ShoppingCartDatasourceImpl implements ShoppingCartDatasource {
    addProductToCart(shoppingCartDto: ShoppingCartDto): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async create(dto: ShoppingCartDto): Promise<ShoppingCartEntity> {
        const shoppingCart = await prisma.shoppingCart.create({
            data: {
                createdAt: dto.createdAt,
                updatedAt: dto.updatedAt,
                cartProducts: {
                    create: dto.cartProducts.map(product => ({
                        product_id: product.product_id,
                        quantity: product.quantity,
                        price: product.price,
                    })),
                },
            }
        })

        return ShoppingCartEntity.objectMapper(shoppingCart)
    }

    async findById(id: number): Promise<ShoppingCartEntity | null> {
        const shoppingCart = await prisma.shoppingCart.findUnique({
            where: {
                id: id
            }
        })

        if (!shoppingCart) throw new Error("Shopping Cart not found")

        return ShoppingCartEntity.objectMapper(shoppingCart)
    }

}