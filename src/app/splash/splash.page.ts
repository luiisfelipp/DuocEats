import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Espera 3 segundos y luego redirige a la página principal (index)
    setTimeout(() => {
      this.router.navigateByUrl('/ubicacion'); // Redirige al menú principal (index)
    }, 3000); // 3 segundos
  }

}