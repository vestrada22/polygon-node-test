import { prisma } from '../../data/postgres'
import { AddToCartDto, RemoveFromCartDto } from '../../domain'
import { ShoppingCartDatasource } from '../../domain/datasources/shopping-cart.datasource'
import { ShoppingCartEntity } from '../../domain/entities/shopping-cart.entity'

export class ShoppingCartDatasourceImpl implements ShoppingCartDatasource {

    async addToCart(addToCartDto: AddToCartDto): Promise<ShoppingCartEntity | null> {
        const product = await prisma.product.findUnique({ where: { id: addToCartDto.productId } })

        if (!product) throw new Error('Product not found')

        await prisma.shoppingCart.upsert({
            where: { id: addToCartDto.cartId },
            update: { updatedAt: new Date() },
            create: { id: addToCartDto.cartId, createdAt: new Date(), updatedAt: new Date() }
        })

        await prisma.cartProduct.upsert({
            where: {
                cart_id_product_id: {
                    cart_id: addToCartDto.cartId,
                    product_id: addToCartDto.productId
                }
            },
            update: {
                quantity: {
                    increment: addToCartDto.quantity
                }
            },
            create: {
                cart_id: addToCartDto.cartId,
                product_id: addToCartDto.productId,
                quantity: addToCartDto.quantity,
                price: product.price
            }
        })

        return this.cartDetails(addToCartDto.cartId)
    }
    async removeProductFromCart(removeFromCartDto: RemoveFromCartDto): Promise<ShoppingCartEntity | null> {

        await prisma.cartProduct.delete({
            where: {
                cart_id_product_id: {
                    cart_id: removeFromCartDto.cartId,
                    product_id: removeFromCartDto.productId
                }
            }
        })

        await prisma.shoppingCart.update({
            where: {
                id: removeFromCartDto.cartId
            },
            data: {
                updatedAt: new Date()
            },
            include: {
                cartProducts: true
            },
        })

        return this.cartDetails(removeFromCartDto.cartId)
    }

    async cartDetails(id: number): Promise<ShoppingCartEntity | null> {
        const shoppingCart = await prisma.shoppingCart.findUnique({
            where: { id: id },
            include: { cartProducts: true }
        })

        if (!shoppingCart) throw new Error('Shopping Cart not found')

        return ShoppingCartEntity.objectMapper(shoppingCart)
    }

}