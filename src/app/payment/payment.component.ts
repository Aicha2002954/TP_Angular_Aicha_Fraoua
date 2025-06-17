import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { OrderDataService } from '../order-data-service.service';
import { Product } from '../../models/Product';
import { CartService } from '../../cart/cart.service';
@Component({
  selector: 'app-payment',
  standalone: true, 
  imports: [RouterModule, HeaderComponent, FooterComponent, FormsModule], 
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
   cartItems: Product[] = [];
   nomComplet = '';
  email = '';
  adresse = '';
  paymentMethod = '';
 

  cardNumber = '';
  expiry = '';
  cvv = '';

  constructor(private orderDataService: OrderDataService, private cartService: CartService, private http: HttpClient,private router: Router) {}

  ngOnInit() {
    const orderInfo = this.orderDataService.getOrderInfo();
    this.nomComplet = orderInfo.nomComplet;
    this.email = orderInfo.email;
    this.adresse = orderInfo.adresse;
    this.paymentMethod = orderInfo.paymentMethod;

    // Récupérer les produits du panier
    this.cartService.getCart().subscribe(products => this.cartItems = products);
  }

  validerPaiement() {
    if(!this.cardNumber || !this.expiry || !this.cvv || !this.nomComplet || !this.email || !this.adresse) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const orderData = {
      nomComplet: this.nomComplet,
      email: this.email,
      adresse: this.adresse,
      paymentMethod: this.paymentMethod,
      cartItems: this.cartItems
    };

  this.http.post('http://localhost:3000/api/checkout', orderData).subscribe({
    next: (res: any) => {
      alert(res.message || 'Paiement effectué avec succès !');
      this.router.navigate(['/confirmation']); // 
    },
    error: (err) => {
      alert('Erreur lors du paiement. Veuillez réessayer.');
      console.error(err);
    }
  });
}}