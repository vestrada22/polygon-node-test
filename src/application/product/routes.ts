import { Router } from "express";

export class ProductRoutes {

    static get routes(): Router {
        const router: Router = Router();

        const controller = new ProductController();

        return router;
    }
}