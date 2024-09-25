import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page {
  products = [
    { name: 'Maxi Dupla', price: 2000, image: 'assets/icon/maxik1.JPG' },
    { name: 'Café + Brownie', price: 2000, image: 'assets/icon/maxik2.JPG' },
  ];

  cart: any[] = [];
  isCartVisible = false;
  isSearchVisible = false;
  searchQuery = '';

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
  
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  filteredProducts() {
    if (!this.searchQuery) {
      return this.products; // Si no hay búsqueda, devuelve todos los productos
    }
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  performSearch() {
    console.log('Search query:', this.searchQuery);
    // Implementar búsqueda
  }

  addToCart(product: any) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart)); // Guardar en localStorage
    console.log('Producto agregado al carrito:', product);
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(cartItem => cartItem !== item);
    localStorage.setItem('cart', JSON.stringify(this.cart)); // Actualizar localStorage
  }

  clearCart() {
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify(this.cart)); // Limpiar localStorage
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  calculateTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  viewCart() {
    this.router.navigate(['/carrito']); 
  }
}
