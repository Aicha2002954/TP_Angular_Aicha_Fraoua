export class Product {
  constructor(
    public productID: string,
    public productTitle: string,
    public productPrice: string,
    public category: string,
    public quantity: number,
    public productImage: string,
    public productDescription: string 
  ) {}

  public printProduct(): string {
    return `productID: ${this.productID}, productTitle: ${this.productTitle}, productPrice: ${this.productPrice}, category: ${this.category}, description: ${this.productDescription}.`;
  }
}
