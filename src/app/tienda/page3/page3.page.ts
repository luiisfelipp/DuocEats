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
<<<<<<< HEAD
    { name: 'Café premium', price: 5.999, image: 'assets/icon/cafepremium.webp' }
=======
    { name: 'Café premium', price: 5.999, image: 'assets/icon/cafepremium.webp' },
    { name: 'Bretzel Chocolate', price: 1.199, image: 'assets/icon/masamarley1.jpg' },
    { name: 'Muffin de Arándanos', price: 1.399, image: 'assets/icon/marleymasas2.webp' },
    { name: 'Muffin de Chocolate', price: 1.399, image: 'assets/icon/marleymasas3.jpg' },
>>>>>>> 06afcb5 (Primer commit)
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
