import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../cart/cart.service';
import { FavoritesService } from '../../app/favorites-service.service'; 

@Component({
  selector: 'app-header',
standalone: true, 
  imports: [CommonModule, RouterModule,FormsModule], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
  searchTerm: string = '';
  cartCount: number = 0; 
  isLoggedIn: boolean = false;
favoritesCount = 0;

constructor(
  private router: Router,
  private cartService: CartService,
  private favoritesService: FavoritesService
) {}

ngOnInit() {
  this.updateCartCount();
  this.updateFavoritesCount();

  this.favoritesService.favoritesChanged.subscribe(() => {
    this.updateFavoritesCount();
  });
}

updateFavoritesCount() {
  this.favoritesCount = this.favoritesService.getFavorites().length;
}


  updateCartCount() {
    this.cartCount = this.cartService.getLocalCart().reduce(
      (acc, product) => acc + (product.quantity || 1), 0
    );
  }

  onSearch() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchTerm } });
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/signin']);
  }
  onAuthSelect(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  const value = selectElement.value;

  if (value === 'signin') {
    this.router.navigate(['/signin']);
  } else if (value === 'register') {
    this.router.navigate(['/register']);
  }
}
showAuthMenu = false;

toggleAuthMenu() {
  this.showAuthMenu = !this.showAuthMenu;
}

goTo(page: string) {
  this.showAuthMenu = false;
  if (page === 'signin') {
    this.router.navigate(['/signin']);
  } else if (page === 'register') {
    this.router.navigate(['/register']);
  }
}


}
