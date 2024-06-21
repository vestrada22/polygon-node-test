import { CartProductDto } from "../cart-product/cart-product-dto";

export class ShoppingCartDto {
    constructor(
        public readonly cartProducts: CartProductDto[],
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) { }

    static create(props: { [key: string]: any }): [string?, ShoppingCartDto?] {
        const { cartProducts = [], createdAt = new Date(), updatedAt = new Date() } = props;

        return [undefined, new ShoppingCartDto(cartProducts, createdAt, updatedAt)];
    }
}