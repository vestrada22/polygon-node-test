class ProductController {

    static async listProducts(req: Request, res: Response) {
        const products = await ProductService.listProducts();
        res.json(products);
    }

    static async searchProducts(req: Request, res: Response) {
        const { query } = req.query;
        const products = await ProductService.searchProducts(query as string);
        res.json(products);
    }

    static async getProductDetail(req: Request, res: Response) {
        const { id } = req.params;
        const product = await ProductService.getProductDetail(parseInt(id));
        res.json(product);
    }
}