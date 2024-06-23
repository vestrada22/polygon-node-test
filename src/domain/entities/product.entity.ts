export class ProductEntity {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public price: number,
        public stock: number,
        public category: string,
    ) { }

    public static objectMapper(object: { [key: string]: any }): ProductEntity {
        const { id, name, description, price, stock, category } = object

        if (!name || !description || !category || !price) {
            throw new Error('Some fields are not valid or empty.')
        }

        return new ProductEntity(
            id,
            name,
            description,
            price,
            stock,
            category,
        )
    }

}