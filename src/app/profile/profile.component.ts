import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile',
   standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'client'
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.user = { ...currentUser };
    } else {
      this.router.navigate(['/signin']);
    }
  }

  updateProfile() {
    const users = this.authService.getUsers();
    const index = users.findIndex(u => u.email === this.user.email);

    if (index !== -1) {
      users[index] = this.user;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      alert('Profil mis à jour avec succès !');
    }
  }
  onPhotoSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imgElement = document.querySelector('.profile-photo') as HTMLImageElement;
      if (imgElement) {
        imgElement.src = reader.result as string;
      }
    };
    reader.readAsDataURL(file);
  }
}

}
