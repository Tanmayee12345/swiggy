import { Routes} from '@angular/router';

import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { FavoritesComponent } from './favourites/favourites.component';
import { HelpComponentComponent } from './help-component/help-component.component';
import { OffersComponent } from './offers/offers.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';

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
