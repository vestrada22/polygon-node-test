import { Router } from "express";
import { ProductController } from "../product/product-controller";
import { ProductDatasourceImpl } from "../../infraestructure/datasources/product.datasource.impl";
import { ProductRepositoryImpl } from "../../infraestructure/repositories/product.repository";

export class ProductRoutes {

    static get routes(): Router {
        const router: Router = Router();

        const datasource = new ProductDatasourceImpl()
        const repository = new ProductRepositoryImpl(datasource)
        const controller = new ProductController(repository)

        console.log(datasource);
        console.log(repository);
        console.log(controller);

        router.post("/", controller.createProduct)
        router.get("/", controller.productsList)
        router.get("/:id", controller.getProductDetail)
        router.get("/search/:query", controller.searchProducts)

        return router;
    }
}