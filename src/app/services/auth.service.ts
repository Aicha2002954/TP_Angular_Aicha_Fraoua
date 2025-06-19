import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'client' | 'gerant' | 'admin';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    {
      firstName: 'Aicha',
      lastName: 'Ben',
      email: 'aicha@test.com',
      password: '1234',
      role: 'client'
    },
    {
      firstName: 'Ali',
      lastName: 'Gerant',
      email: 'gerant@test.com',
      password: '1234',
      role: 'gerant'
    },
    {
      firstName: 'Admin',
      lastName: 'Root',
      email: 'admin@gmail.com',
      password: '1234',
      role: 'admin'
    },
  ];

  private currentUser: User | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const existingUsers = localStorage.getItem('users');
      if (!existingUsers) {
        localStorage.setItem('users', JSON.stringify(this.users));
      } else {
        this.users = JSON.parse(existingUsers);
      }

      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
      }
    }
  }

  login(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      this.currentUser = user;
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return true;
    }

    return false;
  }

  logout(): void {
    this.currentUser = null;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
    }
  }

  isLoggedIn(): boolean {
    if (this.currentUser) return true;

    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
        return true;
      }
    }

    return false;
  }

  getUserRole(): string | null {
    return this.currentUser?.role || null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  register(user: User): boolean {
    const users = this.getUsers();
    const exists = users.find(u => u.email === user.email);

    if (exists) return false;

    users.push(user);
    this.currentUser = user;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(user));
    }

    return true;
  }

  getUsers(): User[] {
    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem('users');
      return data ? JSON.parse(data) : [];
    }
    return this.users;
  }
}
