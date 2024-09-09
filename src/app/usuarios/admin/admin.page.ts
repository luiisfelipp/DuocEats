import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {
  users: any[] = [];
  products: any[] = [];
  newProduct: any = {};

  private apiUrl = 'http://localhost:5000'; // URL de tu API

  constructor(private http: HttpClient, private router: Router) {}

  // Cargar usuarios
  loadUsers() {
    this.http.get<any[]>(`${this.apiUrl}/users`).subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  // Editar usuario (implementa según sea necesario)
  editUser(user: any) {
    // Implementar lógica para editar usuario
    console.log('Editar usuario:', user);
  }

  // Eliminar usuario
  deleteUser(user: any) {
    this.http.delete(`${this.apiUrl}/users/${user._id}`).subscribe(
      () => {
        this.users = this.users.filter(u => u._id !== user._id);
        console.log('Usuario eliminado con éxito');
      },
      (error) => {
        console.error('Error al eliminar usuario:', error);
      }
    );
  }

  // Cargar productos
  loadProducts() {
    this.http.get<any[]>(`${this.apiUrl}/products`).subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  // Agregar producto
  addProduct() {
    if (!this.newProduct.name || !this.newProduct.price || !this.newProduct.image || !this.newProduct.page) {
      alert('Todos los campos son requeridos');
      return;
    }

    this.http.post(`${this.apiUrl}/products`, this.newProduct).subscribe(
      (response: any) => {
        this.products.push(response.product);
        this.newProduct = {}; // Limpiar el formulario
        console.log('Producto agregado con éxito');
      },
      (error) => {
        console.error('Error al agregar producto:', error);
      }
    );
  }

  // Editar producto (implementa según sea necesario)
  editProduct(product: any) {
    // Implementar lógica para editar producto
    console.log('Editar producto:', product);
  }

  // Eliminar producto
  deleteProduct(product: any) {
    this.http.delete(`${this.apiUrl}/products/${product._id}`).subscribe(
      () => {
        this.products = this.products.filter(p => p._id !== product._id);
        console.log('Producto eliminado con éxito');
      },
      (error) => {
        console.error('Error al eliminar producto:', error);
      }
    );
  }
}
