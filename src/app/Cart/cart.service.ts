import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [
    {
      id: 1,
      name: 'christian_louboutin',
      description: 'Mary Janes 100 mm - Cuir de veau verni - Noir - Femme',
      price:1200.10,
      quantity: 15,
      imageUrl: 'assets/images/christian_louboutin.jpg'
    },
    {
      id: 2,
      name: 'sandale_talon_louboutin',
      description: 'Mary Janes12 mm - Cuir de veau verni - Noir - Femme',
      price: 699.99,
      quantity: 6,
      imageUrl: 'assets/images/sandale_talon_louboutin.jpg'
    },
    {
      id: 3,
      name: 'Gucci',
      description: 'Modèl 794687 2HK80 9765',
      price: 600,
      quantity: 3,
      imageUrl: 'assets/images/gucci.jpg'
    },
    {
      id: 4,
      name: 'Huelva_costa',
      description: 'Sandale talon haut 6249.452s',
      price: 49.99,
      quantity: 12,
      imageUrl: 'assets/images/Huelva_costa.jpg'
    },
 
  ];

  constructor() { }
  getProducts(): Product[] {
    return this.products.filter(product => product.quantity > 0);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

}