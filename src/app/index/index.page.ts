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
    { name: 'Starbucks', imgSrc: 'assets/icon/icon2.jpg', link: '/page2' },
    { name: 'Casino', imgSrc: 'assets/icon/icon3.png', link: '/page3' },
    { name: 'Pizzeria', imgSrc: 'assets/icon/icon4.jpg', link: '/page4' },
  ];

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
