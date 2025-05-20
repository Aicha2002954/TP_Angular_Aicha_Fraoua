import { Component } from '@angular/core';
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
    }
  ];
}
