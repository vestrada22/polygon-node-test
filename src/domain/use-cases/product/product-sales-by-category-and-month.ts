import { ProductsSalesDto } from "../../dto";
import { SalesByCategoryAndMonthEntity } from "../../entities/sales-by-category-and-month.entity";
import { ProductRepository } from "../../repositories/product.repository";


export interface SalesByCategoryAndMonthUseCase {
    execute(): Promise<SalesByCategoryAndMonthEntity[]>
}

export class ProductSalesByCategoryAndMonth implements SalesByCategoryAndMonthUseCase {
    constructor(private readonly repository: ProductRepository) { }

    execute(): Promise<SalesByCategoryAndMonthEntity[]> {
        return this.repository.getSalesByCategoryAndMonth();
    }
}
