import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page {
  products = [
    { name: 'Cafe 14z', price: 1299, image: 'assets/icon/cafe.jpg' },
    { name: 'Rocksteady 12Oz', price: 2899, image: 'assets/icon/cafeespuma.webp' },
    { name: 'Café premium', price: 5999, image: 'assets/icon/cafepremium.webp' },
    { name: 'Bretzel Chocolate', price: 1199, image: 'assets/icon/masamarley1.jpg' },
    { name: 'Muffin de Arándanos', price: 1399, image: 'assets/icon/marleymasas2.webp' },
    { name: 'Muffin de Chocolate', price: 1399, image: 'assets/icon/marleymasas3.jpg' },
  ];

  cart: any[] = [];
  isSearchVisible = false;
  searchQuery = '';
  isCartVisible = false;

  constructor(private router: Router) {
    this.loadCart();
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  performSearch() {
    console.log('Search query:', this.searchQuery);
    // Implementar búsqueda
  }

  addToCart(product: any) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart = cart; // Actualiza la vista del carrito
    console.log('Producto agregado al carrito:', product);
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(cartItem => cartItem !== item);
    localStorage.setItem('cart', JSON.stringify(this.cart)); // Actualizar localStorage
  }

  clearCart() {
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify(this.cart));
    console.log('Carrito limpiado');
  }

  calculateTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  viewCart() {
    this.router.navigate(['/carrito']); 
  }

  private loadCart() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
}
