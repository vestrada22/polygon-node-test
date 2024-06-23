export class ProductDto {
    private constructor(
        public name: string,
        public description: string,
        public price: number,
        public stock: number,
        public category: string,
    ) { }

    static create(props: { [key: string]: any }): [string?, ProductDto?] {
        const { name, description, price, stock, category } = props

        if (!name || !description || !price || !stock || !category) {
            return ['Missing required fields', undefined]
        }

        return [
            undefined,
            new ProductDto(name, description, price, stock, category)]
    }
}
