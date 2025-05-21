import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponentComponent } from '../catalog-component/catalog-component.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { PageDetailsComponent } from './page-details/page-details.component';
export const routes: Routes = [
    
    {path : 'home', component : HomeComponent, title: 'Accueil'},
    {path : 'catalog', component : CatalogComponentComponent, title: 'Catalogue des Talons'},
   { path: 'product/:id', component: PageDetailsComponent, title: 'Détails du Produit' },

    {path : 'cart', component : CartComponent, title: 'Mon Panier'},
    {path : 'signin', component : SigninComponent, title: 'Connexion'},
    {path : '', redirectTo : '/home', pathMatch : 'full'},

];
