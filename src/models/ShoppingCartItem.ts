export class ShoppingCartItems{
    private _itemProduct: Product;
    
    public get itemProduct(): Product {
        return this._itemProduct;
    }
    public set itemProduct(value: Product) {
        this._itemProduct = value;
    }
   
    private _quantity: number = 1;


    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }

    constructor(itemProduct: Product, quantity: number = 1) {
        this._itemProduct = itemProduct;
        this._quantity = quantity;
    }

    public addProduct(shoppingCartItem: ShoppingCartItems): void {
        if (this._itemProduct.productID == shoppingCartItem._itemProduct.productID) {
            this.quantity += shoppingCartItem.quantity; 
        }
    }

    public subtractProduct(shoppingCartItems: ShoppingCartItems){
        if(this._itemProduct.productID == shoppingCartItems._itemProduct.productID){
            this.quantity -= shoppingCartItems.quantity;    
        }
    }

    public displayProductItem(){
        return "Title: " +this._itemProduct.productTitle+ ", quantity: " +this._quantity+ ".";
    }
}