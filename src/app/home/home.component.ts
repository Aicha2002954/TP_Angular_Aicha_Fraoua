
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
  this.http.get<any[]>('http://localhost:3000/api/products')
    .subscribe(data => {
      this.products = data; 
    }, error => {
      console.error('Erreur de chargement des produits', error);
    });
}


   goToSignIn(): void {
    this.router.navigate(['/signin']); 
  }
}























/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

  featuredProducts = [
    {
      id: 1,
      name: 'Talons Rouge Chic',
      price: 350,
      image: 'assets/images/Huelva_costa.jpg'
    },
    {
      id: 2,
      name: 'Talons Élégants Noirs',
      price: 420,
      image: 'assets/images/gucci.jpg'
    },
    {
      id: 3,
      name: 'Talons Dorés de Soirée',
      price: 500,
      image: 'assets/images/zara.jpg'
    },
     {
      id: 4,
      name: 'Talons Dorés de Soirée',
      price: 500,
      image: 'assets/images/christian_louboutin.jpg'
    },
    {
      id: 5,
      name: 'Talons Rouge Chic',
      price: 350,
      image: 'assets/images/Huelva_costa.jpg'
    },
    {
      id: 6,
      name: 'Talons Élégants Noirs',
      price: 420,
      image: 'assets/images/gucci.jpg'
    },
    {
      id: 7,
      name: 'Talons Dorés de Soirée',
      price: 500,
      image: 'assets/images/zara.jpg'
    },
     {
      id: 8,
      name: 'Talons Dorés de Soirée',
      price: 500,
      image: 'assets/images/christian_louboutin.jpg'
    },
     {
      id: 9,
      name: 'Talons Dorés de Soirée',
      price: 500,
      image: 'assets/images/zara.jpg'
    },
     {
      id: 10,
      name: 'Talons Dorés de Soirée',
      price: 500,
      image: 'assets/images/christian_louboutin.jpg'
    }
    
  ];
}
*/