import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {
  products = [

    { name: 'Burguer cheddar + mini', price: 4.499, salePrice: 3.999, image: 'assets/icon/promocion1.webp' },
    { name: 'Empanada pino + bebida mini', price: 4.499, salePrice: 4.099, image: 'assets/icon/promocion2.webp' },
    { name: ' Sandwich aliado + café', price: 4.499, salePrice: 3.499, image: 'assets/icon/promocion3.webp' },
    { name: '2 medialuna + cafe', price: 3.199, salePrice: 2.299, image: 'assets/icon/promocion4.jpg' },
    { name: 'Cruzadito chocolate', price: 2.199, image: 'assets/icon/masadulce1.jpg' },
    { name: 'Donuts', price: 1.299, image: 'assets/icon/masadulce2.jpg' },
    { name: 'Cinnamon roll', price: 1.799, image: 'assets/icon/masadulce3.webp' }


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
