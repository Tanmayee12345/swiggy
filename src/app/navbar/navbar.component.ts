import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] // Note: 'styleUrls' should be plural
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(private router: Router) {}

  showSearchInput = false;
  searchTerm = '';

  @Output() searchEvent = new EventEmitter<string>();

  toggleSearch() {
    this.showSearchInput = !this.showSearchInput;
    if (!this.showSearchInput) {
      this.searchTerm = ''; // Clear the search term when hiding the input
      this.searchEvent.emit(''); // Emit an empty search when input is closed
    }
  }

  onSearch() {
    this.searchEvent.emit(this.searchTerm); // Emit the current search term
  }
  isOpen: boolean = false; 
  selectedCity: string = 'others';

  selectCity(city: string) {
    this.selectedCity = city;
    this.isOpen = false; 
  }


  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
