import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IUserCredentials } from '../../models/User';
import { UserService } from '../user.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
   standalone: true, 
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent,FormsModule], 
  styleUrl: './signin.component.css'
})


export class SigninComponent {
credentials = {
    email: '',
    password: ''
  };

  errorMessage: string = '';
  signInError: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  signIn() {
    const { email, password } = this.credentials;

    const success = this.authService.login(email, password);

    if (success) {
      const role = this.authService.getUserRole();

      if (role === 'admin') {
        this.router.navigate(['/admin']);
      } else if (role === 'client') {
        this.router.navigate(['/catalog']);
      } else {
        this.router.navigate(['']);
      }
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect.';
      this.signInError = true;
    }
  }
}




