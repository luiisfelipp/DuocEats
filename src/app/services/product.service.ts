import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  firestore = inject(AngularFirestore);

  // === CREAR PRODUCTO ===
  createProduct(product: Product) {
    return this.firestore.collection('products').add(product);
  }

  // === LEER PRODUCTOS ===
  getProductsByStore(storeId: string) {
    return this.firestore.collection<Product>('products', ref => ref.where('storeId', '==', storeId)).valueChanges();
  }

  // === ACTUALIZAR PRODUCTO ===
  updateProduct(productId: string, product: Product) {
    return this.firestore.collection('products').doc(productId).update(product);
  }

  // === ELIMINAR PRODUCTO ===
  deleteProduct(productId: string) {
    return this.firestore.collection('products').doc(productId).delete();
  }
}
