import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopresaurantsserviceService } from '../topresaurants/topresaurantsservice.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [MatCardModule, CommonModule,NavbarComponent],
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {
  selectedItems: { name: string; description: string }[] = [];
  restaurantId: string | null = null;
  cart: any[] = [];
  allItems: { name: string; description: string; img: string; category: string, price: number }[] = [];
  filteredItems: { name: string; description: string; img: string; category: string, price: number }[] = [];
  userFavorites: { name: string; description: string; img: string; category: string, price: number }[] = [];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: TopresaurantsserviceService
  ) {}

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('id');
    if (this.restaurantId) {
      this.allItems = this.restaurantService.getItems(this.restaurantId);
      this.filteredItems = this.allItems;
    }

    const userId = localStorage.getItem('userId');
    if (userId) {
      this.cart = JSON.parse(localStorage.getItem(`cart_${userId}`) || '[]');
      this.loadFavorites(userId);
    }
  }

  // Load user's favorites from local storage
  loadFavorites(userId: string): void {
    const favorites = localStorage.getItem(`favorites_${userId}`);
    this.userFavorites = favorites ? JSON.parse(favorites) : [];
  }

  // Check if an item is in the favorites list
  isFavorite(item: any): boolean {
    return this.userFavorites.some(fav => fav.name === item.name);
  }

  // Add item to favorites
  addToFavorites(item: any): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userFavorites.push(item);
      localStorage.setItem(`favorites_${userId}`, JSON.stringify(this.userFavorites));
    }
  }

  // Remove item from favorites
  removeFromFavorites(item: any): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userFavorites = this.userFavorites.filter(fav => fav.name !== item.name);
      localStorage.setItem(`favorites_${userId}`, JSON.stringify(this.userFavorites));
    }
  }

  filterItems(category: string): void {
    if (category === 'Veg') {
      this.filteredItems = this.allItems.filter(item => item.category === 'Veg');
    } else if (category === 'Non-Veg') {
      this.filteredItems = this.allItems.filter(item => item.category === 'Non-Veg');
    } else {
      this.filteredItems = this.allItems;
    }
  }

  addToCart(item: any): void {
    const userId = localStorage.getItem('userId');
    if (userId && this.restaurantId) {
      if (this.cart.length > 0 && this.cart[0].restaurantId !== this.restaurantId) {
        alert('Items from more than one restaurant cannot be added.');
        return;
      }

      const existingItemIndex = this.cart.findIndex(cartItem => cartItem.name === item.name);

      if (existingItemIndex > -1) {
        this.cart[existingItemIndex].quantity += 1;
      } else {
        this.cart.push({ ...item, quantity: 1, restaurantId: this.restaurantId });
      }

      localStorage.setItem(`cart_${userId}`, JSON.stringify(this.cart));
    }
  }

  increaseItem(item: any): void {
    const userId = localStorage.getItem('userId');
    const cartItem = this.cart.find(cartItem => cartItem.name === item.name);

    if (cartItem) {
      cartItem.quantity++;
      localStorage.setItem(`cart_${userId}`, JSON.stringify(this.cart));
    }
  }

  decreaseItem(item: any): void {
    const userId = localStorage.getItem('userId');
    const cartItemIndex = this.cart.findIndex(cartItem => cartItem.name === item.name);

    if (cartItemIndex > -1) {
      if (this.cart[cartItemIndex].quantity > 1) {
        this.cart[cartItemIndex].quantity--;
      } else {
        this.cart.splice(cartItemIndex, 1);
      }
      localStorage.setItem(`cart_${userId}`, JSON.stringify(this.cart));
    }
  }

  getItemCount(item: any): number {
    const cartItem = this.cart.find(i => i.name === item.name);
    return cartItem ? cartItem.quantity : 0;
  }

  getTotalItems(): number {
    return this.cart.reduce((sum, i) => sum + i.quantity, 0);
  }

  isInCart(item: any): boolean {
    return this.cart.some(i => i.name === item.name);
  }

  getTotalPrice(): number {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
