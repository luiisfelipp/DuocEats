import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserEditModalComponent } from './user-edit-modal.component';

@NgModule({
  declarations: [UserEditModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Asegúrate de que esto esté incluido
  ],
  exports: [UserEditModalComponent] // Si planeas usar este componente en otros módulos
})
export class UserEditModalModule { }
