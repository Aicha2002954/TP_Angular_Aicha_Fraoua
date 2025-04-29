import { tick } from "@angular/core/testing";
import { ShoppingCartItems } from "./ShoppingCartItem";

export class ShoppingCart{
    private _itemsProduct: ShoppingCartItems[] = []; 

    public get itemsProduct(): ShoppingCartItems[] {
        return this._itemsProduct;
    }
    public set itemsProduct(value: ShoppingCartItems[]) {
        this._itemsProduct = value;
    }
    private _total: number = 0;

    public get total(): number {    
        return this._total;
    }
    public set total(value: number) {
        this._total = value;
    }
    
    constructor(itemsProduct: ShoppingCartItems[] = [], total: number = 0) {
        this._itemsProduct = itemsProduct;
        this._total = total;
    }
    

    public addItem(shoppingCart: ShoppingCartItems): void {
        const existingItem = this._itemsProduct.find(p =>
            p.itemProduct.productID === shoppingCart.itemProduct.productID
        );
    
        if (existingItem) {
            existingItem.addProduct(shoppingCart);
        } else {
            this._itemsProduct.push(shoppingCart);
        }
    
        this.updateTotal();
    }   

    removeItem(productID: number): void {
        this.itemsProduct = this.itemsProduct.filter(
          item => item.itemProduct.productID !== productID
        );
        this.updateTotal();
    }
    
    getItems(): ShoppingCartItems[] {
        return [...this.itemsProduct];
    }

    private updateTotal(): void {
        this._total = this._itemsProduct.reduce(
            (sum, item) => sum + item.itemProduct.productPrice * item.quantity,
            0
        );
    }

    getTotal(): number {
        return this.total;
      }
    
      displayCart(): void {
        console.log("Contenu du Panier:");
        this.itemsProduct.forEach(item => {
          console.log(item.displayProductItem());
        });
        console.log(`Total: ${this.total}€`);
    }
    
}