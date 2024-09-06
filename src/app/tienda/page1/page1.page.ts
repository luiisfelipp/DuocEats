import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {
  products = [

    { name: 'Cruzadito chocolate', price: 2.199, image: 'assets/icon/masadulce1.jpg' },
    { name: 'Donuts', price: 1.299, image: 'assets/icon/masadulce2.jpg' },
    { name: 'Cinnamon roll', price: 1.799, image: 'assets/icon/masadulce3.webp' },


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
