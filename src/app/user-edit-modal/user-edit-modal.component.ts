// user-edit-modal.component.ts
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
})
export class UserEditModalComponent {
  @Input() user: User;

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss(); // Cierra el modal sin pasar datos
  }

  save() {
    if (this.user && this.user.uid) {
      this.modalCtrl.dismiss(this.user); // Devuelve el usuario actualizado
    } else {
      console.error('El usuario no tiene un UID válido.');
    }
  }
}
