export class CartProductDto {
    private constructor(
        public readonly cart_id: number,
        public readonly product_id: number,
        public readonly quantity: number,
        public readonly price: number
    ) { }

    static create(props: { [key: string]: any }): [string?, CartProductDto?] {
        const { cart_id, product_id, quantity, price } = props

        return [undefined, new CartProductDto(cart_id, product_id, quantity, price)]
    }
}