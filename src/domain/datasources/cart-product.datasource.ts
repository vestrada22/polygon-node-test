import { CartProductDto } from "../dto";

export abstract class CartProductDatasource {

    abstract create(dto: CartProductDto): Promise<void>

}