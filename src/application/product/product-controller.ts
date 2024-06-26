import { Request, Response } from 'express'
import { ProductDto } from '../../domain/dto/product/product.dto'
import { ProductRepository } from '../../domain/repositories/product.repository'
import { CreateProduct } from '../../domain/use-cases/product/create-product'
import { ProductsList } from '../../domain/use-cases/product/products-list'
import { SearchProduct } from '../../domain/use-cases/product/search-products'
import { ProductDetails } from '../../domain/use-cases/product/product-details'
import { ProductSalesByCategoryAndMonth } from '../../domain/use-cases/product/product-sales-by-category-and-month'

export class ProductController {

    constructor(
        private readonly repository: ProductRepository
    ) { }

    createProduct(req: Request, res: Response) {
        const [error, productDto] = ProductDto.create(req.body)
        if (error) {
            return res.status(400).json({ error })
        }
        new CreateProduct(this.repository)
            .execute(productDto!)
            .then(product => res.status(201).json(product))
            .catch(error => res.status(400).json({ error }))
    }

    productsList(req: Request, res: Response) {
        new ProductsList(this.repository)
            .execute()
            .then(products => res.status(200).json(products))
            .catch(error => res.status(400).json({ error }))
    }

    searchProducts(req: Request, res: Response) {
        const { query } = req.params
        new SearchProduct(this.repository)
            .execute(query)
            .then(products => res.status(200).json(products))
            .catch(error => res.status(400).json({ error }))
    }

    getProductDetail(req: Request, res: Response) {
        const id = +req.params.id

        new ProductDetails(this.repository)
            .execute(id)
            .then(product => res.status(200).json(product))
            .catch(error => res.status(400).json({ error }))
    }

    getProductsSalesByCategoryAndMonth(req: Request, res: Response) {
        new ProductSalesByCategoryAndMonth(this.repository)
            .execute()
            .then(products => res.status(200).json(products))
            .catch(error => res.status(400).json({ error }))
    }
}