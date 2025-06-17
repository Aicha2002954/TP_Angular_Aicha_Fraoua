import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { Product } from '../../models/Product';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
   standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent, 
    FormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproduct: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCart().subscribe(product => {
      this.cartproduct = product;
      this.calculateTotal();
    });
  }

 calculateTotal(): void {
  this.totalPrice = this.cartproduct.reduce((total, product) => {
    const price = parseFloat(product.productPrice.replace('$', '').trim());
    return total + (price * product.quantity);  
  }, 0);
}

  removeItem(productId: string): void {
    this.cartService.removeFromLocalCart(productId).subscribe(() => {
      this.loadCart();
    });
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe(() => {
      this.loadCart();
    });
  }

  updateCart(): void {
  this.cartService.updateCart(this.cartproduct).subscribe(() => {
    this.calculateTotal();
  });
}

passerCommande(): void {
  this.cartService.passerCommande(this.cartproduct).subscribe(response => {
    alert("✅ Commande tpassat b naja7 !");
    this.clearCart();
  });
}

}
