export class AddToCartDto {
    constructor(
        public readonly cartId: number,
        public readonly productId: number,
        public readonly quantity: number,
    ) { }

    static create(props: { [key: string]: any }): [string?, AddToCartDto?] {
        const { cartId, productId, quantity } = props
        return [undefined, new AddToCartDto(cartId, productId, quantity)]
    }
}