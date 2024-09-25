import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  nombre: string = '';            // Inicializa con un valor por defecto
  apellido: string = '';
  apodo: string = '';
  fechaNacimiento: string = '';   // Usar string para manejar la fecha
  telefono: string = '';
  sexo: string = 'masculino';     // Valor por defecto

  constructor(private router: Router) { }

  ngOnInit() {
    // Inicializa los valores de los campos con los datos actuales del perfil del usuario
    // Aquí puedes cargar los datos del perfil si es necesario
  }

  guardarCambios() {
    // Lógica para guardar los cambios realizados en el perfil
    console.log('Cambios guardados:', {
      nombre: this.nombre,
      apellido: this.apellido,
      apodo: this.apodo,
      telefono: this.telefono,
      sexo: this.sexo
    });
    
    // Redirigir de vuelta a la página de perfil
    this.router.navigate(['/mi-perfil']);
  }
}
