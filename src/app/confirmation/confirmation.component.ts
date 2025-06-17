import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { Product } from '../../models/Product';
import { OrderDataService } from '../order-data-service.service'; 
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  cartproduct: Product[] = [];
  totalPrice: number = 0;

  nomComplet = '';
  email = '';
  adresse = '';
  paymentMethod = '';

  constructor(private cartService: CartService, private orderDataService: OrderDataService) {}

  ngOnInit() {
  
    this.cartService.getCart().subscribe(products => {
      this.cartproduct = products;
      this.calculateTotal();
    });


    const info = this.orderDataService.getOrderInfo();
    this.nomComplet = info.nomComplet;
    this.email = info.email;
    this.adresse = info.adresse;
    this.paymentMethod = info.paymentMethod;
  }

 calculateTotal(): void {
  this.totalPrice = this.cartproduct.reduce((total, product) => {
    const price = parseFloat(product.productPrice.replace('$', '').trim());
    return total + (price * product.quantity);  
  }, 0);
}


}
