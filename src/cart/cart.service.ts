import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:3000/api/products';
  private cartUrl = 'http://localhost:3000/api/cart';
  private localCart: Product[] = [];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map(apiProducts =>
        apiProducts.map(apiProduct =>
          new Product(
            apiProduct.productID,
            apiProduct.productTitle,
            apiProduct.productPrice, 
            apiProduct.category,
            apiProduct.quantity,
            apiProduct.productImage
          )
        )
      ),
      catchError(error => {
        console.error(' Erreur lors de la récupération des produits:', error);
        return of([]);
      })
    );
  }

  getProductById(id: string): Observable<Product | null> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
      map(apiProduct =>
        new Product(
          apiProduct.productID,
          apiProduct.productTitle,
          apiProduct.productPrice,
          apiProduct.category,
          apiProduct.quantity,
          apiProduct.productImage
        )
      ),
      catchError(error => {
        console.error('Erreur lors de la récupération du produit:', error);
        return of(null);
      })
    );
  }

 addToCart(product: Product): Observable<any> {
  console.log('🧪 addToCart reçu:', product);

  const existingProduct = this.localCart.find(p => p.productID === product.productID);

  if (existingProduct) {
    existingProduct.quantity += product.quantity || 1;
  } else {
    this.localCart.push(product); 
  }

  return this.http.post(this.cartUrl, this.localCart).pipe(
    catchError(error => {
      console.error('Erreur lors de l\'ajout au panier:', error);
      return of(null);
    })
  );
}


  getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(this.cartUrl).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération du panier:', error);
        return of([]);
      })
    );
  }

  removeFromLocalCart(productId: string) {
    this.localCart = this.localCart.filter(p => p.productID !== productId);
    return this.http.post(this.cartUrl, this.localCart);
  }

  clearCart() {
    this.localCart = [];
    return this.http.post(this.cartUrl, []);
  }
  
  passerCommande(products: Product[]): Observable<any> {
  return this.http.post('http://localhost:3000/api/commandes', products);
}
updateCart(updatedCart: Product[]): Observable<any> {
  this.localCart = updatedCart;
  return this.http.post(this.cartUrl, this.localCart).pipe(
    catchError(error => {
      console.error('Erreur mise à jour panier :', error);
      return of(null);
    })
  );
}
getLocalCart(): Product[] {
  return this.localCart;
}

}
