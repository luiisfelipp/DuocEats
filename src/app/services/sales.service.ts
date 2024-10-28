import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Cambiar a compat
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  constructor(private firestore: AngularFirestore) {}

  // Agregar una nueva venta
  addSale(sale: any) {
    return this.firestore.collection('ventas').add(sale);
  }

  // Obtener todas las ventas
  getSales(): Observable<any[]> {
    return this.firestore.collection('ventas').valueChanges();
  }
}
