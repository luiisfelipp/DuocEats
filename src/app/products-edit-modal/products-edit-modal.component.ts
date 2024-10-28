// products-edit-modal.component.ts
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products-edit-modal',
  templateUrl: './products-edit-modal.component.html',
  styleUrls: ['./products-edit-modal.component.scss'],
})
export class ProductsEditModalComponent {
  @Input() product: Product;

  constructor(private modalCtrl: ModalController) {}

  save() {
    this.modalCtrl.dismiss(this.product); // Cierra el modal y pasa el producto actualizado
  }

  close() {
    this.modalCtrl.dismiss(); // Cierra el modal sin pasar datos
  }
}
