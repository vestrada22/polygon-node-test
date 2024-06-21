import { CartProductDto } from "../dto";

export abstract class CartProductRepository {

    abstract create(cartProduct: CartProductDto): Promise<void>
    
}