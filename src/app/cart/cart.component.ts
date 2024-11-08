import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cart: any[] = []; // Cart array for storing items
  totalPrice: number = 0; // Total price of items in the cart

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const storedCart = localStorage.getItem(`cart_${userId}`);
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
        this.updateTotalPrice(); // Calculate total price after loading cart data
      }
    }
  }

  removeFromCart(index: number): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.cart.splice(index, 1);
      localStorage.setItem(`cart_${userId}`, JSON.stringify(this.cart));
      this.updateTotalPrice(); // Update total price after item removal
    }
  }

  increaseQuantity(index: number) {
    this.cart[index].quantity += 1;
    this.updateTotalPrice();
  }

  decreaseQuantity(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
      this.updateTotalPrice();
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  updateTotalPrice() {
    this.totalPrice = this.getTotalPrice();
  }
  checkout() {
    // Implement your checkout logic here
    console.log('Proceeding to checkout with items:', this.cart);
  }
}
