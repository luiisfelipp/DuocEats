import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page {
  products = [
    { name: 'Cafe 14z', price: 1.299, image: 'assets/icon/cafe.jpg' },
    { name: 'Rocksteady 12Oz', price: 2.899, image: 'assets/icon/cafeespuma.webp' },
    { name: 'Café premium', price: 5.999, image: 'assets/icon/cafepremium.webp' }
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
