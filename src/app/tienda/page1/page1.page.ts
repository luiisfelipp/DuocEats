import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {
  products = [
    { name: 'Café vainilla latte', price: 1.899, image: 'assets/icon/cafevainilla.jpg' },
    { name: 'cruzadito de chocolate', price: 2.199, image: 'assets/icon/cruzadito.jpg' },
    { name: 'dona', price: 1.299, image: 'assets/icon/dona.jpg' },
    { name: '2 medialuna + cafe', price: 3.199, image: 'assets/icon/2medialuna.jpg' }
  ];

  cart: any[] = [];

  constructor(private router: Router) {}

  addToCart(product: any) {
    this.cart.push(product);
    console.log('Producto agregado al carrito:', product);
  }

  viewCart() {
    // Navegar a la página del carrito
    this.router.navigate(['/cart']);
  }
}
