import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { TopresaurantsserviceService } from '../../services/topresaurantsservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-topresaurants',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  templateUrl: './topresaurants.component.html',
  styleUrls: ['./topresaurants.component.scss']
})
export class TopresaurantsComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;

  cards = [
    { id: 'restaurant1', title: 'Pizza Hut', food: 'pizza', city: 'Kurnool', description: '50% OFF UPTO ₹80', image: '../../assets/pizzahut.jpg', image1: '../../assets/start.png', time: '4.1 | 15-20 min' },
    { id: 'restaurant2', title: 'KFC', food: 'Burgers,Fast Food,Rolls& Wraps', city: 'Kurnool', description: 'ITEMS AT ₹179 ', image: 'assets/kfc.jpg',image1: '../../assets/start.png', time: '4.2 | 15-20 min' },
    { id: 'restaurant3', title: "Domino's Pizza", food: 'pizza', city: 'Kurnool', description: '50% OFF UPTO ₹80', image: '../../assets/dominos.jpg', image1: '../../assets/start.png', time: '4.5 | 15-20 min' },
    { id: 'restaurant4', title: 'Ajanta Tiffin and Meals', food: 'Burgers,Fast Food', city: 'Kurnool', description: 'ITEMS AT ₹179 ', image: 'assets/ajanta.jpg',image1: '../../assets/start.png', time: '4.3 | 15-20 min' },
    { id: 'restaurant1', title: 'Pizza Hut', food: 'pizza', city: 'Kurnool', description: '50% OFF UPTO ₹80', image: '../../assets/pizzahut.jpg', image1: '../../assets/start.png', time: '4.1 | 15-20 min' },
    { id: 'restaurant2', title: 'KFC', food: 'Burgers,Fast Food,Rolls& Wraps', city: 'Kurnool', description: 'ITEMS AT ₹179 ', image: 'assets/kfc.jpg',image1: '../../assets/start.png', time: '4.2 | 15-20 min' },
    { id: 'restaurant3', title: "Domino's Pizza", food: 'pizza', city: 'Kurnool', description: '50% OFF UPTO ₹80', image: '../../assets/dominos.jpg', image1: '../../assets/start.png', time: '4.5 | 15-20 min' },
    { id: 'restaurant4', title: 'Ajanta Tiffin and Meals', food: 'Burgers,Fast Food', city: 'Kurnool', description: 'ITEMS AT ₹179 ', image: 'assets/ajanta.jpg',image1: '../../assets/start.png', time: '4.3 | 15-20 min' },
    { id: 'restaurant3', title: "Domino's Pizza", food: 'pizza', city: 'Kurnool', description: '50% OFF UPTO ₹80', image: '../../assets/dominos.jpg', image1: '../../assets/start.png', time: '4.5 | 15-20 min' },
    { id: 'restaurant4', title: 'Ajanta Tiffin and Meals', food: 'Burgers,Fast Food', city: 'Kurnool', description: 'ITEMS AT ₹179 ', image: 'assets/ajanta.jpg',image1: '../../assets/start.png', time: '4.3 | 15-20 min' }
    // Add more restaurant cards as needed
  ];

  scrollPosition = 0;
  itemWidth = 300; // Adjust to the actual width of each card
  maxScrollPosition = 0;

  ngAfterViewInit() {
    if (this.carousel.nativeElement) {
      const carouselWidth = this.carousel.nativeElement.scrollWidth;
      const containerWidth = this.carousel.nativeElement.offsetWidth;
      this.maxScrollPosition = carouselWidth - containerWidth;
    }
  }

  get isAtStart(): boolean {
    return this.scrollPosition <= 0;
  }

  get isAtEnd(): boolean {
    return this.scrollPosition >= this.maxScrollPosition;
  }

  moveLeft() {
    if (!this.isAtStart) {
      this.scrollPosition = Math.max(0, this.scrollPosition - this.itemWidth);
      this.updateCarouselTransform();
    }
  }

  moveRight() {
    if (!this.isAtEnd) {
      this.scrollPosition = Math.min(this.maxScrollPosition, this.scrollPosition + this.itemWidth);
      this.updateCarouselTransform();
    }
  }

  private updateCarouselTransform() {
    if (this.carousel.nativeElement) {
      this.carousel.nativeElement.style.transform = `translateX(-${this.scrollPosition}px)`;
    }
  }

  toggleExpand(card: any) {
    console.log('Toggle expand for:', card);
    // Additional logic for expanding details could go here
  }
  selectedItems: any[] = [];

  constructor(private router: Router) {}

  onImageClick(restaurantId: string) {
    this.router.navigate(['/menu', restaurantId]);
  }
  selectedRestaurant: any = null; // Variable to hold selected restaurant
  restaurantNotFound: boolean = false; // Variable to check if restaurant is found
  onCardClick(title: string) {
    // Find the restaurant based on title
    const restaurant = this.cards.find(card => card.title === title);
    if (restaurant) {
      this.selectedRestaurant = restaurant; // Set the selected restaurant
      this.restaurantNotFound = false; // Reset not found flag
    } else {
      this.selectedRestaurant = null; // Clear selected restaurant if not found
      this.restaurantNotFound = true; // Set not found flag
    }
  }
  filteredCards = [...this.cards]; // This will hold the filtered car
  onSearch(searchTerm: string) {
    if (searchTerm) {
      this.filteredCards = this.cards.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredCards = [...this.cards]; // Reset to original cards if search is empty
    }
  }

  filteredItems: { name: string; description: string; img: string; category: string, price: number }[] = [];
allItems: { name: string; description: string; img: string; category: string, price: number }[] = [];

filterItems(category: string): void {
  if (category === 'Veg') {
    this.filteredItems = this.allItems.filter(item => item.category === 'Veg');
  } else if (category === 'Non-Veg') {
    this.filteredItems = this.allItems.filter(item => item.category === 'Non-Veg');
  } else {
    this.filteredItems = this.allItems;
  }
  console.log(this.filterItems);
}

}
