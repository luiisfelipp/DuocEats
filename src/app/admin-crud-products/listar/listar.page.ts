import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../listar/usuario.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  usuarios: any[] = []; // Lista de usuarios

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

  }

  listarUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
  agregarUsuario() {
    console.log('Agregar usuario');
  }

  modificarUsuario(usuario: any) {
    console.log('Modificar usuario:', usuario);
  }

  eliminarUsuario(usuario: any) {
    console.log('Eliminar usuario:', usuario);
    this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
  }
}



