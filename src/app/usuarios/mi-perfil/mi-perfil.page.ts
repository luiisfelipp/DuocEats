import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {
  userName: string = ''; // Variable para almacenar el nombre del usuario
  createdDate: string = '';  // Variable para almacenar la fecha formateada

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore) {
    
   }

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
    const today = new Date();
    this.createdDate = today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
     // Obtener el usuario autenticado
     this.afAuth.authState.subscribe((user) => {
      if (user) {
        // Una vez autenticado, buscar el documento del usuario en la colección 'users'
        this.firestore
          .collection('users')
          .doc(user.uid)
          .valueChanges()
          .subscribe((userData: any) => {
            if (userData) {
              this.userName = userData.name; // Asigna el nombre del usuario
            }
          });
      }
    });
  }
}
