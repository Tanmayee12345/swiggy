# Swiggy Clone Application

This project is a clone of the popular food delivery app Swiggy. It allows users to browse restaurants, view menus, search for items, and order food from their chosen location. This application is currently limited to one location and one restaurant per order at a time. Check out the live deployment link and Mock API link below.

- **Deployment**: [Swiggy Clone on Vercel](https://swiggy-5lmqfp661-tanmayees-projects.vercel.app)
- **Mock API**: [Mock API for User Registration](https://6713b118690bf212c75f69ee.mockapi.io/register)

---

## Table of Contents
1. [Features](#features)
2. [Components](#components)
3. [Services](#services)
4. [Routes](#routes)
5. [Links](#links)

---

### Features

- **User Registration & Login**: Users can register with their name, phone number, and email. Upon successful registration, users can log in to order food, view favorites, and access cart functionalities.
- **Main Page Navigation**: Users can navigate to key sections: 
  - Food Delivery
  - Instamart
  - Dineout
  - Genie
  - Groceries
- **Food Delivery**: Users can browse through top restaurants, search for items, view menus, and place orders.
- **Cart**: The cart allows users to add food items from one restaurant at a time, adjust quantities, and view the total price.
- **Favorites**: Users can add or remove items from their favorites list.
- **Help & Support**: A dedicated section for FAQs, customer support contact, and email option.
- **Offers**: Displays available offers and discounts from restaurants.
- **Footer**: Displays company information, contact details, and legal information.

---

### Components

1. **Register Component**
   - Allows users to register using name, phone number, and email. Includes validations and stores details in MockAPI for future login verification.
   
2. **Navbar Component**
   - Provides navigation to different sections: Cart, Help, Offers, Sign Up, Logout, Search, and Favorites.

3. **Login Component**
   - Enables users to log in using their phone number. Upon successful login, an alert is displayed, and users are redirected to the Food Delivery page.

4. **Logout Component**
   - Ends the user session and logs out the user.

5. **Carousel Component**
   - Displays food images that users can hover over for a preview and navigate to a particular restaurant if desired.

6. **Top Restaurants Component**
   - Showcases top restaurants in the user’s area.

7. **Restaurant Menu Component**
   - Lists items in a selected restaurant’s menu. Users can view details, add items to their cart or favorites.

8. **Cart Component**
   - Users can add items to the cart only after registering or logging in. The cart restricts orders to one restaurant at a time. Users can adjust quantities, view the total, and proceed to checkout.

9. **Favorites Component**
   - Displays a list of favorited items that users can add or remove.

10. **Search Component**
    - Allows users to search for items in the Food Delivery section.

11. **Help Component**
    - Provides answers to frequently asked questions and contact information for customer support.

12. **Offers Component**
    - Highlights restaurants with ongoing offers and discounts.

13. **Footer Component**
    - Displays company details, contact information, and legal policies.

---

### Services

1. **Register Service**
   - Manages user registration by storing phone numbers and other details in MockAPI.

2. **Restaurant Service**
   - Fetches available restaurants and items from the database to display in various sections like the menu, favorites, and cart.

---

### Routes

| Path             | Component                | Description                        |
|------------------|--------------------------|------------------------------------|
| `/`              | `MainpageComponent`      | Main landing page                  |
| `/home`          | `HomeComponent`          | Home page                          |
| `/menu/:id`      | `RestaurantMenuComponent`| Restaurant menu by ID              |
| `/login`         | `LoginComponent`         | User login page                    |
| `/register`      | `RegisterComponent`      | User registration page             |
| `/logout`        | `LogoutComponent`        | Logs out the user                  |
| `/cart`          | `CartComponent`          | User cart page (with auth guard)   |
| `/search`        | `SearchComponent`        | Search items                       |
| `/favourites`    | `FavoritesComponent`     | View favorites                     |
| `/help`          | `HelpComponentComponent` | Help & FAQs                        |
| `/offers`        | `OffersComponent`        | View current offers                |

---

### Links

- **Deployment**: [Swiggy Clone on Vercel](https://swiggy-5lmqfp661-tanmayees-projects.vercel.app)
- **Mock API**: [Mock API for User Registration](https://6713b118690bf212c75f69ee.mockapi.io/register)

---

This project showcases the core functionalities of a Swiggy-like application with interactive components, structured services, and seamless navigation for a smooth user experience.
