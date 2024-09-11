import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {

  constructor(private router: Router) { }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

  ngOnInit() {
  }

}