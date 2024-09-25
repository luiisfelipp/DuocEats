import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {
  cart: any[] = []; // Inicializa el carrito con productos
  customerName: string = ''; // Nombre del cliente
  customerEmail: string = ''; // Email del cliente

  constructor(private router: Router) {
    // Carga los productos del carrito desde el localStorage
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

  addCard() {
    // Lógica para agregar tarjeta (puedes abrir un modal aquí)
    console.log('Agregar tarjeta lógica aquí');
  }

  continuePurchase() {
    if (!this.customerName || !this.customerEmail) {
      alert('Por favor, completa la información del cliente.');
      return;
    }

    const pedido = {
      customerName: this.customerName,
      customerEmail: this.customerEmail,
      items: this.cart,
      total: this.calculateTotal()
    };

    localStorage.setItem('pedidos', JSON.stringify(pedido));

    // Redirige a la página de pedidos
    this.router.navigate(['/pedido']);
  }

  payCash() {
    // Lógica para realizar el pago en efectivo
    console.log('Pago en efectivo realizado');
    this.continuePurchase(); // Continúa con la compra después del pago
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