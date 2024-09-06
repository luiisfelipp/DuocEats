import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage {
  items = [
    { name: 'Paradiso', imgSrc: 'assets/icon/icon1.jpg', link: '/page1' },
    { name: 'MAXIK', imgSrc: 'assets/icon/maxik.jpeg', link: '/page2' },
    { name: 'Marley Coffee', imgSrc: 'assets/icon/marley.jpg', link: '/page3' },
    { name: 'Promociones', imgSrc: 'assets/icon/banner.jpg', link: '/page4' },
  ];

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

  // Nueva función para la navegación a Promociones
  navigateToPage4() {
    this.router.navigate(['/page4']);
  }
}