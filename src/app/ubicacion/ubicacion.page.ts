import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage {
  selectedLocation: string = ''; // Variable para almacenar la ubicación seleccionada

  // Lista de ubicaciones con sus imágenes
  locations = [
    { name: 'Duoc Alameda', imgSrc: 'assets/icon/sede1.jpg' },
    { name: 'Duoc San Bernardo', imgSrc: 'assets/icon/sede2.jpg' },
    { name: 'Duoc Antonio Varas', imgSrc: 'assets/icon/sede3.jpg' },
    { name: 'Duoc San Carlos de Apoquindo', imgSrc: 'assets/icon/sede4.jpg' },
  ];

  constructor(private router: Router, private alertController: AlertController) {}

  // Método para seleccionar una ubicación
  selectLocation(locationName: string) {
    this.selectedLocation = locationName;
    console.log('Ubicación seleccionada:', this.selectedLocation);
  }

  // Método para mostrar alerta si la sede no está disponible
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Sede no disponible',
      message: 'Lo sentimos, DuocEats aún no está disponible en esta sede.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Método para navegar a la siguiente página solo si "Duoc San Bernardo" está seleccionada
  navigateToNextPage() {
    if (this.selectedLocation === 'Duoc San Bernardo') {
      this.router.navigate(['/login']); // Cambia '/login' a la página que desees
    } else {
      this.showAlert(); // Muestra el mensaje si se selecciona otra ubicación
    }
  }
}
