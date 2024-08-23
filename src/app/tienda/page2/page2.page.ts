import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page  {
  products = [
    { name: 'Maxi Dupla', price: 2.999, image: 'assets/icon/maxik1.JPG' },
    { name: 'Café + Brownie', price: 2.999, image: 'assets/icon/maxik2.JPG' },
  ];

  cart: any[] = [];

  constructor(private router: Router) { }

  addToCart(product: any) {
    this.cart.push(product);
    console.log('Producto agregado al carrito:', product);
  }

  viewCart() {
    // Navegar a la página del carrito
    this.router.navigate(['/cart']);
  }

  ngOnInit() {
  }

}
