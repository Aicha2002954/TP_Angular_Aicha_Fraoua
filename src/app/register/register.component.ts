import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService, User } from '../services/auth.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',

  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

  export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
 
  password: string = '';
  confirmPassword: string = '';
  role: 'client' | 'gerant' | 'admin' = 'client';

  constructor(private router: Router, private authService: AuthService) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    const newUser: User = {
  firstName: this.firstName,
  lastName: this.lastName,
  email: this.email,
 
  password: this.password,
  role: this.role
};

    const success = this.authService.register(newUser);
    if (success) {
      alert('Inscription réussie !');
      this.router.navigate(['/signin']);
    } else {
      alert('Cet utilisateur existe déjà.');
    }
  }
}
