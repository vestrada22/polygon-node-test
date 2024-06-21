import { create } from "domain";

export class ProductDto {
    private constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly price: number,
        public readonly stock: number,
        public readonly category: string,
    ) { }

    static create(props: { [key: string]: any }): [string?, ProductDto?] {
        const { name, description, price, stock, category } = props;
        if (!name || !description || !price || !stock || !category) {
            return ['Missing required properties', undefined];
        }

        return [undefined, new ProductDto(name, description, price, stock, category)];
    }
}
