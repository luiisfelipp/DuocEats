import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {
  cart: any[] = []; // Este carrito debe ser rellenado con los productos del carrito

  constructor(private router: Router) {
    
    // Inicializa el carrito, aquí deberías cargar los productos del carrito
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

  calculateTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(cartItem => cartItem !== item);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  clearCart() {
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  viewCart() {
    this.router.navigate(['/carrito']); // Cambia 'cart' a 'carrito'
  }
}