import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from '../models/Product';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-component',
  standalone: true,
  imports: [ProductDetailsComponent, CommonModule],
  templateUrl: './catalog-component.component.html',
  styleUrls: ['./catalog-component.component.css'] 
})
export class CatalogComponentComponent implements OnInit {
  products: Product[] = [];
  
  selectedProduct: Product | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits:", err);
      }
    });
  }

  showDetails(product: Product): void {
    this.selectedProduct = product;
  }

  closeDetails(): void {
    this.selectedProduct = null;
  }

}
