import { AddToCartDto, RemoveFromCartDto } from '../../domain'
import { ShoppingCartDatasource } from '../../domain/datasources/shopping-cart.datasource'
import { ShoppingCartEntity } from '../../domain/entities/shopping-cart.entity'
import { ShoppingCartRepository } from '../../domain/repositories/shopping-cart.repository'

export class ShoppingCartRepositoryImpl implements ShoppingCartRepository {

    constructor(private readonly datasource: ShoppingCartDatasource) { }

    addToCart(addToCartDto: AddToCartDto): Promise<ShoppingCartEntity | null> {
        return this.datasource.addToCart(addToCartDto)
    }

    removeProductFromCart(removeFromCartDto: RemoveFromCartDto): Promise<ShoppingCartEntity | null> {
        return this.datasource.removeProductFromCart(removeFromCartDto)
    }

    cartDetails(id: number): Promise<ShoppingCartEntity | null> {
        return this.datasource.cartDetails(id)
    }

    completePurchase(cartId: number): Promise<void> {
        return this.datasource.completePurchase(cartId)
    }
}