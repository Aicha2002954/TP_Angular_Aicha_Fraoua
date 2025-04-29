import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CartService {
    private baseUrl = 'http://localhost:3000/api/products';

    constructor(private http: HttpClient) {}
    getProducts(): Observable<Product[]> {
      return this.http.get<any[]>(this.baseUrl).pipe(
        map(apiProducts => apiProducts.map(apiProduct => new Product(
          apiProduct.productID,
          apiProduct.productTitle,
          apiProduct.prouctPrice,  
          apiProduct.category,
          apiProduct.quantity,
          apiProduct.productImage
        ))),
        catchError(error => {
          console.error('Erreur lors de la récupération des produits:', error);
          return of([]); 
        })
      );
    }
    getProductById(id: string): Observable<Product | null> {
      return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
        map(apiProduct => new Product(
          apiProduct.productID,
          apiProduct.productTitle,
          apiProduct.productPrice,
          apiProduct.category,
          apiProduct.quantity,
          apiProduct.productImage,
        )),
        catchError(error => {
          console.error('Erreur lors de la récupération du produit:', error);
          return of(null); 
        })
      );
    }
}
