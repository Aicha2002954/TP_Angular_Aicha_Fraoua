import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  private orderInfo = {
    nomComplet: '',
    email: '',
    adresse: '',
    paymentMethod: ''
  };

  setOrderInfo(info: {nomComplet: string; email: string; adresse: string; paymentMethod: string}) {
    this.orderInfo = info;
  }

  getOrderInfo() {
    return this.orderInfo;
  }

  clearOrderInfo() {
    this.orderInfo = { nomComplet: '', email: '', adresse: '', paymentMethod: '' };
  }
}
