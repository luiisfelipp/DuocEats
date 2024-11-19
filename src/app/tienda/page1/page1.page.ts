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
  products: any[] = []; // Cambiado: Este array ahora será llenado desde Firebase.

  constructor(private firestore: AngularFirestore) {
    this.getProducts(); // Llamar al método para obtener productos desde Firebase.
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  performSearch() {
    console.log(`Buscando: ${this.searchQuery}`);
    // Implementar la lógica de búsqueda (opcional).
  }

  getProducts() {
    this.firestore.collection('products').valueChanges().subscribe(
      (data) => {
        this.products = data;
        console.log('Productos cargados desde Firebase:', this.products);
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

  addToCart(item: any) {
    this.cart.push(item);
    console.log(`${item.name} agregado al carrito.`);
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
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

  buy() {
    if (this.cart.length > 0) {
      const total = this.calculateTotal();
      const saleData = {
        items: this.cart,
        total: total,
        createdAt: new Date(),
      };

      this.firestore
        .collection('ventas')
        .add(saleData)
        .then(() => {
          console.log('Venta añadida con éxito');
          this.clearCart(); // Limpia el carrito después de la compra
        })
        .catch((error) => {
          console.error('Error al añadir la venta: ', error);
        });
    } else {
      console.log('El carrito está vacío');
    }
  }

  filteredProducts(category: string) {
    return this.products.filter((product) => product.category === category);
  }
}
