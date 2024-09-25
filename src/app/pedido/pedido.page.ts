import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage {
  pedido: any; // Almacena la información del pedido

  constructor(private router: Router) {
    // Carga la información del pedido desde localStorage
    this.pedido = JSON.parse(localStorage.getItem('pedidos') || '{}');
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
