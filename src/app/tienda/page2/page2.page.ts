import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page {
  products = [
    { name: 'Maxi Dupla', price: 2999, image: 'assets/icon/maxik1.JPG' },
    { name: 'Café + Brownie', price: 2999, image: 'assets/icon/maxik2.JPG' },
  ];

  cart: any[] = [];
  isSearchVisible = false;
  searchQuery = '';
  isCartVisible = false;

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
  
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
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
