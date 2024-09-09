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
    { name: 'Muffin Familiar', price: 3.899, image: 'assets/icon/masadulce4.webp' },
    { name: 'Arizona 680cc', price: 2.599, image: 'assets/icon/liquidos1.webp' },
    { name: 'Jugo Jumex 350cc', price: 1.599, image: 'assets/icon/liquidos2.webp' },
    { name: 'Iced Coffee', price: 2.599, image: 'assets/icon/liquidos3.webp' },
    { name: 'Bebida Mini', price: 899, image: 'assets/icon/liquidos4.webp' },
    


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
