import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductsEditModalComponent } from './products-edit-modal.component';

@NgModule({
  declarations: [ProductsEditModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [ProductsEditModalComponent] // Si necesitas usar el componente en otras partes
})
export class ProductsEditModalModule {}
