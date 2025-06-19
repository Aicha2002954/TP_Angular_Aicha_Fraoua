import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '../app/favorites-service.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  
  @Input() product!: Product;
  @Input() isLowStock: boolean = false;

  @Output() buy = new EventEmitter<Product>();
  @Output() showDetails = new EventEmitter<Product>();

  byButtonCliked(product: Product) {
    this.buy.emit(product);
  }

  DetailClick() {
    this.showDetails.emit(this.product);
  }
   constructor(
    private favoritesService: FavoritesService,
   
  ) {}
 toggleFavorite(product: any): void {
  if (this.favoritesService.isFavorite(product.productID)) {
    this.favoritesService.removeFromFavorites(product.productID);
  } else {
    this.favoritesService.addToFavorites(product);
  }
}


  isFavorited(productId: number): boolean {
    return this.favoritesService.isFavorite(productId);
  }

  
}
