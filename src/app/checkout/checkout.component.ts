import { Component } from '@angular/core';
import { OrderDataService } from '../order-data-service.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
    standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent, 
    FormsModule
  ],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  nomComplet = '';
  email = '';
  adresse = '';
  paymentMethod = '';

  constructor(private orderDataService: OrderDataService, private router: Router) {}

  continuer() {
    if(!this.nomComplet || !this.email || !this.adresse || !this.paymentMethod) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    this.orderDataService.setOrderInfo({
      nomComplet: this.nomComplet,
      email: this.email,
      adresse: this.adresse,
      paymentMethod: this.paymentMethod
    });

    this.router.navigate(['/payment']);
  }
}
