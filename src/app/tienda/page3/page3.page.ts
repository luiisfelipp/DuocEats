import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page {
  products = [
    { name: 'Cafe 14z', price: 1200, image: 'assets/icon/cafe.jpg' },
    { name: 'Rocksteady 12Oz', price: 2800, image: 'assets/icon/cafeespuma.webp' },
    { name: 'Café premium', price: 5900, image: 'assets/icon/cafepremium.webp' },
    { name: 'Bretzel Chocolate', price: 1100, image: 'assets/icon/masamarley1.jpg' },
    { name: 'Muffin de Arándanos', price: 1300, image: 'assets/icon/marleymasas2.webp' },
  ];

  cart: any[] = [];
  isSearchVisible = false;
  searchQuery = '';
  isCartVisible = false;

  constructor(private router: Router) {
    this.loadCart();
  }

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

  filteredProducts() {
    if (!this.searchQuery) {
      return this.products; // Si no hay búsqueda, devuelve todos los productos
    }
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
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
    return this.cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  viewCart() {
    this.router.navigate(['/carrito']); 
  }

  private loadCart() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
}
