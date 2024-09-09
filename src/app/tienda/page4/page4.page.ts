import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page {
  products = [
    { name: 'Café 14Oz + 2 Sandwich Vegetariano', price: 4399, salePrice: 3999, image: 'assets/icon/cafepancito.jpg' },
    { name: 'Café 14Oz + 2 Medialunas Tradicional', price: 4999, salePrice: 3999, image: 'assets/icon/cafemedialuna.jpg' },
    { name: 'Burguer cheddar + mini', price: 4499, salePrice: 3999, image: 'assets/icon/promocion1.webp' },
    { name: 'Empanada pino + bebida mini', price: 4499, salePrice: 4099, image: 'assets/icon/promocion2.webp' },
    { name: 'Sandwich aliado + café', price: 4499, salePrice: 3499, image: 'assets/icon/promocion3.webp' },
    { name: '2 medialuna + cafe', price: 3199, salePrice: 2299, image: 'assets/icon/promocion4.jpg' },
    { name: 'Maxi Dupla', price: 2999, salePrice: 2399, image: 'assets/icon/maxik1.JPG' },
    { name: 'Café + Brownie', price: 2999, salePrice: 2399, image: 'assets/icon/maxik2.JPG' },
  ];

  cart: any[] = [];
  isCartVisible = false;

  constructor(private router: Router) {
    this.loadCart();
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
}
