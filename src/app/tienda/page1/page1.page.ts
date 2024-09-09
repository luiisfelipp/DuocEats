import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  products: any[] = [];
  cart: any[] = [];
  private apiUrl = 'http://localhost:5000'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<any[]>(`${this.apiUrl}/products?page=page1`).subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  addToCart(product: any) {
    this.cart.push(product);
    console.log('Producto agregado al carrito:', product);
  }

  viewCart() {
    this.router.navigate(['/cart']);
  }
}
