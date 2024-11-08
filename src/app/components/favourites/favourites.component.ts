import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../navbar/navbar.component';

// Declare the FavoriteItem interface outside the component class
interface FavoriteItem {
  name: string;
  description: string;
  img: string;
  price: number;
}

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [MatCardModule,CommonModule,NavbarComponent],
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']  // Corrected styleUrls (plural)
})
export class FavoritesComponent implements OnInit {
  userFavorites: FavoriteItem[] = [];

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userFavorites = JSON.parse(localStorage.getItem(`favorites_${userId}`) || '[]');
    }
  }

  // Explicitly type the 'item' parameter as FavoriteItem
  removeFromFavorites(item: FavoriteItem): void { 
    const userId = localStorage.getItem('userId');
    if (userId) {
      // Filter the item out of the userFavorites array and update localStorage
      this.userFavorites = this.userFavorites.filter(fav => fav.name !== item.name);
      localStorage.setItem(`favorites_${userId}`, JSON.stringify(this.userFavorites));
    }
  }
}
