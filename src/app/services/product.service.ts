import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Producto {
  id?: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private firestore: AngularFirestore) {}

  // Método para obtener los productos
  getProducts(): Observable<Producto[]> {
    return this.firestore.collection<Producto>('products').valueChanges({ idField: 'id' });
  }
}
