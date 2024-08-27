import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  private apiUrl = 'http://localhost:5000/register'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  registerUser() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    const user = {
      email: this.email,
      password: this.password,
    };
  
    this.http.post(this.apiUrl, user).subscribe(
      (response: any) => {
        alert('Usuario registrado con éxito');
        this.navCtrl.navigateRoot('/login');
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        alert('Error en el registro');
      }
    );
  }
  
}