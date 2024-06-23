export class CartProductEntity {
  constructor(
    public cart_id: number,
    public product_id: number,
    public quantity: number,
    public price: number
  ) { }
}