import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {
  isSearchVisible: boolean = false;
  isCartVisible: boolean = false;
  searchQuery: string = '';
  cart: any[] = [];
  products: any[] = [
    { id: 1, name: 'Café Arábica', price: 1000, category: 'masas', image: 'cafe_arabica.jpg' },
    { id: 2, name: 'Café Robusta', price: 1200, category: 'masas', image: 'cafe_robusta.jpg' },
    { id: 3, name: 'Pastel de Chocolate', price: 500, category: 'liquidos', image: 'pastel_chocolate.jpg' },
    { id: 4, name: 'Jugo Natural', price: 700, category: 'liquidos', image: 'jugo_natural.jpg' },
    // Agrega más productos según sea necesario
  ];

  constructor(private firestore: AngularFirestore) {}

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  performSearch() {
    // Lógica para realizar la búsqueda (puedes implementarla más adelante)
    console.log(`Buscando: ${this.searchQuery}`);
  }

  addToCart(item: any) {
    this.cart.push(item);
    console.log(`${item.name} agregado al carrito.`);
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
    console.log(`${item.name} eliminado del carrito.`);
  }

  calculateTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  clearCart() {
    this.cart = [];
    console.log('Carrito limpiado.');
  }

  viewCart() {
    console.log('Contenido del carrito:', this.cart);
  }

  filteredProducts(category: string) {
    return this.products.filter(product => product.category === category);
  }

  buy() {
    if (this.cart.length > 0) {
      const total = this.calculateTotal();
      const saleData = {
        items: this.cart,
        total: total,
        createdAt: new Date(),
      };

      this.firestore.collection('ventas').add(saleData)
        .then(() => {
          console.log('Venta añadida con éxito');
          this.clearCart(); // Limpia el carrito después de la compra
        })
        .catch(error => {
          console.error('Error al añadir la venta: ', error);
        });
    } else {
      console.log('El carrito está vacío');
    }
  }
}
