import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page {
  products = [

    { name: 'Café 14Oz + 2 Sandwich Vegetariano', price: 4.399, salePrice: 3.999, image: 'assets/icon/cafepancito.jpg' },
    { name: 'Café 14Oz + 2 Medialunas Tradicional', price: 4.999, salePrice: 3.999, image: 'assets/icon/cafemedialuna.jpg' },
    { name: 'Burguer cheddar + mini', price: 4.499, salePrice: 3.999, image: 'assets/icon/promocion1.webp' },
    { name: 'Empanada pino + bebida mini', price: 4.499, salePrice: 4.099, image: 'assets/icon/promocion2.webp' },
    { name: ' Sandwich aliado + café', price: 4.499, salePrice: 3.499, image: 'assets/icon/promocion3.webp' },
    { name: '2 medialuna + cafe', price: 3.199, salePrice: 2.299, image: 'assets/icon/promocion4.jpg' },
    { name: 'Maxi Dupla', price: 2.999, salePrice: 2.399, image: 'assets/icon/maxik1.JPG' },
    { name: 'Café + Brownie', price: 2.999, salePrice: 2.399, image: 'assets/icon/maxik2.JPG' },


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
