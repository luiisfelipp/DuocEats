import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page {
  products = [
    { name: 'Café 14Oz + 2 Sandwich Vegetariano', price: 4300, salePrice: 3900, image: 'assets/icon/cafepancito.jpg' },
    { name: 'Café 14Oz + 2 Medialunas Tradicional', price: 4900, salePrice: 3900, image: 'assets/icon/cafemedialuna.jpg' },
    { name: 'Burguer cheddar + mini', price: 4400, salePrice: 3900, image: 'assets/icon/promocion1.webp' },
    { name: 'Empanada pino + bebida mini', price: 4400, salePrice: 3900, image: 'assets/icon/promocion2.webp' },
    { name: 'Sandwich aliado + café', price: 4400, salePrice: 3100, image: 'assets/icon/promocion3.webp' },
    { name: '2 medialuna + cafe', price: 3100, salePrice: 2200, image: 'assets/icon/promocion4.jpg' },
    { name: 'Maxi Dupla', price: 2900, salePrice: 2300, image: 'assets/icon/maxik1.JPG' },
    { name: 'Café + Brownie', price: 2900, salePrice: 2300, image: 'assets/icon/maxik2.JPG' },
  ];

  cart: any[] = [];
  isCartVisible = false;
  isSearchVisible = false;
  searchQuery = ''; 

  constructor(private router: Router) {
    this.loadCart();
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
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
    return this.cart.reduce((total, item) => total + item.price, 0).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  }

  viewCart() {
    this.router.navigate(['/carrito']); 
  }

  private loadCart() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  // Agrega estos métodos si los necesitas
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  performSearch() {
    // Implementa la lógica de búsqueda aquí
    console.log('Buscando:', this.searchQuery);
  }
}
