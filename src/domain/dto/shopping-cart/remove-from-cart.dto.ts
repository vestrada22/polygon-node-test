export class RemoveFromCartDto {
    constructor(
        public readonly cartId: number,
        public readonly productId: number
    ) { }

    static create(props: { [key: string]: any }): [string?, RemoveFromCartDto?] {
        const { cartId, productId } = props

        return [undefined, new RemoveFromCartDto(cartId, productId)]
    }
}