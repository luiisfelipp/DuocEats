import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  email: string;
  // Añadir otros campos si es necesario
}

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
})
export class AdminPage implements OnInit {
  users: User[] = []; // Variable para almacenar la lista de usuarios

  private apiUrl = 'http://localhost:5000/users'; // URL de la API

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // No hacemos nada aquí por ahora
  }

  // Método para cargar usuarios desde la API
  loadUsers() {
    this.http.get<User[]>(this.apiUrl).subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }
}
