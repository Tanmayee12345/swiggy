import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  constructor(private router: Router) {}

  logout(): void {
    // Remove the auth token and user-specific data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem(`cart_${localStorage.getItem('userId')}`);  // Clear the user's cart
  
    // Redirect to the login page or other desired route
    this.router.navigate(['/login']);
  }
  
}
