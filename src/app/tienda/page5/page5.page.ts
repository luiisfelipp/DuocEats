import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page {
  products = [
    { name: 'Mocha Frappuchino', price: 5900, image: 'assets/icon/frappu1.webp', category: 'Frappuccinos con base de café' },
    { name: 'Caramel Frappuchino', price: 5900, image: 'assets/icon/frappu2.webp', category: 'Frappuccinos con base de café' },
    { name: 'Java Chips Frappuchino', price: 5900, image: 'assets/icon/frappu5.webp', category: 'Frappuccinos con base de café' },
    { name: 'Espresso Frappuchino', price: 5900, image: 'assets/icon/frappu4.webp', category: 'Frappuccinos con base de café' },
    { name: 'Frappuccino Green tea Matcha', price: 5900, image: 'assets/icon/frappu6.webp', category: 'Frappuccino con base de suave crema' },
    { name: 'Frappuccino Fresa', price: 5900, image: 'assets/icon/frappu7.webp', category: 'Frappuccino con base de suave crema' },
    { name: 'Frappuccino Chocolate', price: 5900, image: 'assets/icon/frappu8.webp', category: 'Frappuccino con base de suave crema' },
    { name: 'Frappuccino Vainilla', price: 5900, image: 'assets/icon/frappu9.webp', category: 'Frappuccino con base de suave crema' },
  ];

  cart: any[] = [];
  isSearchVisible = false;
  searchQuery = ''; 
  filteredProducts = this.products.slice(); // Inicializa con todos los productos
  isCartVisible = false;

  constructor(private router: Router) {
    this.loadCart();
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
    if (!this.isSearchVisible) {
      this.searchQuery = ''; // Limpiar la búsqueda al cerrar
      this.filteredProducts = this.products.slice(); // Reiniciar productos filtrados
    }
  }

  performSearch() {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
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
