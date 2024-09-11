import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {
  products = [
    { name: 'Cruzadito chocolate', price: 2199, image: 'assets/icon/masadulce1.jpg', category: 'masas' },
    { name: 'Donuts', price: 1299, image: 'assets/icon/masadulce2.jpg', category: 'masas' },
    { name: 'Cinnamon roll', price: 1799, image: 'assets/icon/masadulce3.webp', category: 'masas' },
    { name: 'Muffin Familiar', price: 3899, image: 'assets/icon/masadulce4.webp', category: 'masas' },
    { name: 'Arizona 680cc', price: 2599, image: 'assets/icon/liquidos1.webp', category: 'liquidos' },
    { name: 'Jugo Jumex 350cc', price: 1599, image: 'assets/icon/liquidos2.webp', category: 'liquidos' },
    { name: 'Iced Coffee', price: 2599, image: 'assets/icon/liquidos3.webp', category: 'liquidos' },
    { name: 'Bebida Mini', price: 899, image: 'assets/icon/liquidos4.webp', category: 'liquidos' },
  ];

  cart: any[] = [];
  isCartVisible = false;
  isSearchVisible = false;
  searchQuery = '';
  filteredProductsMasasDulces = this.products.filter(p => p.category === 'masas');
  filteredProductsLiquidos = this.products.filter(p => p.category === 'liquidos');

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
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

  viewCart() {
    this.router.navigate(['/carrito']); 
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  performSearch() {
    this.filteredProductsMasasDulces = this.products.filter(product =>
      product.category === 'masas' && product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.filteredProductsLiquidos = this.products.filter(product =>
      product.category === 'liquidos' && product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  calculateTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }
}
