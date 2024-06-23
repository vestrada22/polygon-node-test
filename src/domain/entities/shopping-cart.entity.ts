import { CartProductDto } from '../dto/cart-product/cart-product-dto'

export class ShoppingCartEntity {
    constructor(
        public id: number,
        public cartProducts: CartProductDto[],
        public created_at: Date,
        public updated_at: Date
    ) { }

    public static objectMapper(object: { [key: string]: any }): ShoppingCartEntity {
        const { id, cartProducts, create_at, updated_at } = object

        return new ShoppingCartEntity(
            id,
            cartProducts,
            create_at,
            updated_at
        )
    }
}