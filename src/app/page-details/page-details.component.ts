import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../../models/Product';
import { CartService } from '../../cart/cart.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {
  @Input() product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!this.product && id) {
      this.cartService.getProductById(id).subscribe(product => {
        this.product = product;
      });
    }
  }

 addToCart(): void {
    if (this.product) {
      // 👇 تأكد أن quantity موجودة وغير صفر
      const productToAdd = new Product(
        this.product.productID,
        this.product.productTitle,
        this.product.productPrice,
        this.product.category,
        1,  // ← quantité par défaut
        this.product.productImage
      );

      console.log('🛒 Produit envoyé au panier:', productToAdd);

      this.cartService.addToCart(productToAdd).subscribe(() => {
        alert('Produit ajouté au panier !');
      });
    }
  }

}
