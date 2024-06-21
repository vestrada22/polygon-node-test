import { Request, Response } from 'express'
import { ProductDto } from '../../domain/dto';
import { CreateProduct, ProductDetails, ProductRepository, ProductsList, SearchProduct } from '../../domain';
export class ProductController {

    constructor(private readonly repository: ProductRepository) { }

    createProduct(req: Request, res: Response) {
        const [error, productDto] = ProductDto.create(req.body)
        if (error) {
            return res.status(400).json({ error })
        }
        new CreateProduct(this.repository)
            .execute(productDto!)
            .then(product => res.json(product))
            .catch(error => res.status(400).json({ error }))
    }

    productsList(req: Request, res: Response) {
        new ProductsList(this.repository)
            .execute()
            .then(products => res.json(products))
            .catch(error => res.status(400).json({ error }))
    }

    searchProducts(req: Request, res: Response) {
        const { query } = req.params;
        console.log(query)
        new SearchProduct(this.repository)
            .execute(query)
            .then(products => res.json(products))
            .catch(error => res.status(400).json({ error }))
    }

    getProductDetail(req: Request, res: Response) {
        const id = +req.params.id;

        new ProductDetails(this.repository)
            .execute(id)
            .then(product => res.json(product))
            .catch(error => res.status(400).json({ error }))
    }
}