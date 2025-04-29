export class Product {
  private _productID: string = '';  
  public get productID(): string {
    return this._productID;
  }
  public set productID(value: string) {
    this._productID = value;
  }

  private _productTitle: string = '';
  public get productTitle(): string {
    return this._productTitle;
  }
  public set productTitle(value: string) {
    this._productTitle = value;
  }

  private _productPrice: string = ''; 
  public get productPrice(): string {
    return this._productPrice;
  }
  public set productPrice(value: string) {
    this._productPrice = value;
  }

  private _category: string = '';
  public get category(): string {
    return this._category;
  }
  public set category(value: string) {
    this._category = value;
  }

  private _quantity: number = 1 ;
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  
  private _productImage: string = '';
  public get productImage(): string {
      return this._productImage;
  }
  public set productImage(value: string) {
      this._productImage = value;
  }

  constructor(
    productID: string, 
    productTitle: string, 
    productPrice: string, 
    category: string, 
    quantity: number,
    productImage: string
  ) {
    this._productID = productID;
    this._productTitle = productTitle;
    this._productPrice = productPrice;
    this._category = category;
    this._productImage = productImage;
    this._quantity = quantity;
  }

  public printProduct(): string {
    return `productID: ${this._productID}, productTitle: ${this._productTitle}, productPrice: ${this._productPrice}, category: ${this._category}.`;
  }
}
