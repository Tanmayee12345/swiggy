import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegistrationServiceService } from '../../services/registration-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  phone = '';

  constructor(private registrationService: RegistrationServiceService, private router: Router) {}

  onSubmit() {
    if (!this.phone) {
      alert("Please enter a phone number.");
      return;
    }

    this.registrationService.checkPhoneNumber(this.phone).subscribe({
      next: (response) => {
        if (response.length > 0) {
          // Phone number exists, navigate to the main page
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('userId', this.phone); 
          alert("You have logged in Succesfully");
          this.router.navigate(['/home']);
        } else {
          // Phone number not found, show an error
          alert("Phone number not found. Please register an account.");
        }
      },
      error: (error) => {
        console.error("Error checking phone number:", error);
      }
    });
  }
}
