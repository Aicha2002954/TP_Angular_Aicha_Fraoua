import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';

import { Product } from '../models/Product';
@Injectable({ providedIn: 'root' })
export class FavoritesService {
  favoritesChanged = new Subject<void>();
  private favorites: Product[] = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      const saved = localStorage.getItem('favorites');
      this.favorites = saved ? JSON.parse(saved) : [];
    }
  }

  getFavorites(): Product[] {
    return [...this.favorites];
  }

  addToFavorites(product: Product): void {
   if (!this.isFavorite(+product.productID)) {
 
      this.favorites.push(product);
      this.saveToLocal();
      this.favoritesChanged.next();
    }
  }

  removeFromFavorites(productId: number): void {
    console.log("Avant suppression:", this.favorites);
   this.favorites = this.favorites.filter(p => +p.productID !== +productId);

    console.log("Après suppression:", this.favorites);
    this.saveToLocal();
    this.favoritesChanged.next();
  }

  isFavorite(productId: number): boolean {
    return this.favorites.some(p => +p.productID === +productId);
  }

  private saveToLocal(): void {
    if (this.isBrowser) {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }
}
