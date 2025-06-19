import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponentComponent } from '../catalog-component/catalog-component.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { PageDetailsComponent } from './page-details/page-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RegisterComponent } from './register/register.component';
import { FavoritesComponent } from './favorites/favorites.component';
export const routes: Routes = [
    
    {path : 'home', component : HomeComponent, title: 'Accueil'},
    {path : 'catalog', component : CatalogComponentComponent, title: 'Catalogue des Talons'},
     { path: 'product/:id', component: PageDetailsComponent, title: 'Détails du Produit' },
  
    {path : 'cart', component : CartComponent, title: 'Mon Panier'},

    {path : 'signin', component : SigninComponent, title: 'Connexion'},
      { path: 'register', component: RegisterComponent, title: 'Inscription' },
      { path: 'profile', component: ProfileComponent, title: 'Mon Profil' },


    { path: 'checkout', component: CheckoutComponent, title: 'Finaliser la commande' },
    { path: 'payment', component: PaymentComponent, title: 'Paiement' },
    { path: 'confirmation', component: ConfirmationComponent, title: 'Confirmation de commande' },
 { path: 'favorites', component: FavoritesComponent,title:'liste favorite' },
    {path : '', redirectTo : '/home', pathMatch : 'full'},

];
