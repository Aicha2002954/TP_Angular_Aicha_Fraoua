import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Product } from '../models/Product';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { PageDetailsComponent } from '../app/page-details/page-details.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { HeaderComponent } from '../app/header/header.component';
import { FooterComponent } from '../app/footer/footer.component';

@Component({
  selector: 'app-catalog-component',
  standalone: true,
  imports: [
    ProductDetailsComponent,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterModule ,PageDetailsComponent 
  ],
  templateUrl: './catalog-component.component.html',
  styleUrls: ['./catalog-component.component.css']
})
export class CatalogComponentComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  filter: string = '';

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filter = params['filter'] || '';
    });

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

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product: any) => product.category.toLowerCase() === this.filter.toLowerCase()
        );
  }
  
}
