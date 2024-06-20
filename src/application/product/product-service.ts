export class ProductService {
    private products: string[] = [];

    addProduct(product: string) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    async execute(url: string) {

    }
}