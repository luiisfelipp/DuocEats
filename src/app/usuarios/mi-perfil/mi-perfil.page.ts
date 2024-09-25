import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {

  constructor(private router: Router) { }

  // Función para navegar a cualquier página
  navigateTo(link: string) {
    this.router.navigate([link]);
  }

  // Función para ir a la página de admin
  navigateToAdmin() {
    this.router.navigate(['/admin']);
  }

  // Función para ir a la página de editar perfil
  navigateToEditarPerfil() {
    this.router.navigate(['/editar-perfil']);
  }

  // Función para cerrar sesión
  cerrarSesion() {
    // Aquí pones la lógica para cerrar sesión, como limpiar tokens, remover datos de sesión, etc.
    console.log('Sesión cerrada');

    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
}
