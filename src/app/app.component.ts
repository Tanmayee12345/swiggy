import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { NavbarComponent } from './components/navbar';
// import { FooterComponent } from './footer/footer.component';
// import { CarouselComponent } from './carousel/carousel.component';
// import { TopresaurantsComponent } from './topresaurants/topresaurants.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TopresaurantsComponent } from './components/topresaurants/topresaurants.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HttpClientModule,NavbarComponent,FooterComponent,CarouselComponent,TopresaurantsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'swiggy';
}
