import { Routes} from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { authGuard } from './auth.guard';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favourites/favourites.component';
import { HelpComponentComponent } from './components/help-component/help-component.component';
import { OffersComponent } from './components/offers/offers.component';

// import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
// import { HomeComponent } from './home/home.component';
// import { SearchComponent } from './search/search.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { authGuard } from './auth.guard';
// import { LogoutComponent } from './logout/logout.component';
// import { CartComponent } from './cart/cart.component';
// import { FavoritesComponent } from './favourites/favourites.component';
// import { HelpComponentComponent } from './help-component/help-component.component';
// import { OffersComponent } from './offers/offers.component';
// import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
// import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [
  {path:'',component:MainpageComponent},
  { path: 'home', component: HomeComponent }, 
 
  { path: 'menu/:id', component:RestaurantMenuComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'logout', component:LogoutComponent },
  { path: 'cart', component:CartComponent,canActivate:[authGuard] },
  {path:'search',component:SearchComponent},
  {path:'favourites',component:FavoritesComponent},
  {path:'help',component:HelpComponentComponent},
  {path:'offers',component:OffersComponent}
];
