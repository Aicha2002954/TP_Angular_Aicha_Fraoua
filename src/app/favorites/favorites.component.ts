import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoritesService } from '../favorites-service.service';
import { Product } from '../../models/Product';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favorites: Product[] = [];
  private favoritesSub!: Subscription;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
    this.favoritesSub = this.favoritesService.favoritesChanged.subscribe(() => {
      this.favorites = this.favoritesService.getFavorites(); 
    });
  }

  ngOnDestroy(): void {
    if (this.favoritesSub) this.favoritesSub.unsubscribe();
  }

  removeFavorite(productId: number): void {
    console.log("Suppression de l'ID :", productId); 
    this.favoritesService.removeFromFavorites(productId);
    this.favorites = this.favoritesService.getFavorites(); 
  }
}
