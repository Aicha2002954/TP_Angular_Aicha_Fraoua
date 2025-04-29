import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: Product;

  @Output() buy = new EventEmitter<Product>();
  
  @Output() showDetails = new EventEmitter<Product>();

  byButtonCliked(product: Product) {
    this.buy.emit(product);
  }

  DetailClick() {
    this.showDetails.emit(this.product);
  }
}
