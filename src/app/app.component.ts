import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        // Oculta el footer en login y register
        this.showFooter = !(currentRoute === '/login' || currentRoute === '/register');
      }
    });
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
