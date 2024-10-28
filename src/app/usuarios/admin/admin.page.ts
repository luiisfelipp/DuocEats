import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../../models/user.model';
import { Product } from '../../models/product.model';
import { UserEditModalComponent } from '../../user-edit-modal/user-edit-modal.component';
import { ProductsEditModalComponent } from '../../products-edit-modal/products-edit-modal.component'; // Importa el nuevo modal
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {
  users: User[] = [];
  products: Product[] = [];

  newUser: User = { uid: '', email: '', password: '', name: '' };
  newProduct: Product = { id: '', name: '', price: 0, category: '', storeId: '' };

  selectedTab: string = 'products';
  isProductListVisible: boolean = false; 
  isUserListVisible: boolean = false; 

  constructor(private firestore: AngularFirestore, private modalCtrl: ModalController) {
    this.loadUsers();
  }

  loadUsers() {
    this.firestore.collection<User>('users').snapshotChanges().subscribe(actions => {
      this.users = actions.map(action => {
        const data = action.payload.doc.data() as User;
        const uid = action.payload.doc.id;
        return { uid, ...data };
      });
    });
  }

  loadProducts() {
    this.firestore.collection<Product>('products').snapshotChanges().subscribe(actions => {
      this.products = actions.map(action => {
        const data = action.payload.doc.data() as Product;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  showProducts() {
    this.isProductListVisible = true; 
    this.loadProducts(); 
  }

  showUsers() {
    this.isUserListVisible = true; 
    this.loadUsers(); 
  }

  addUser() {
    const userToAdd = { ...this.newUser, uid: '' };
    this.firestore.collection<User>('users').add(userToAdd).then(docRef => {
      const uid = docRef.id;
      return this.firestore.collection<User>('users').doc(uid).update({ uid });
    }).then(() => {
      this.clearUserInputs(); 
      this.loadUsers(); 
    }).catch(error => {
      console.error('Error al agregar usuario:', error);
    });
  }

  addProduct() {
    const productToAdd = { ...this.newProduct, id: '' };
    this.firestore.collection<Product>('products').add(productToAdd).then(docRef => {
      const id = docRef.id;
      return this.firestore.collection<Product>('products').doc(id).update({ id });
    }).then(() => {
      this.loadProducts(); 
    }).catch(error => {
      console.error('Error al agregar producto:', error);
    });
  }

  clearUserInputs() {
    this.newUser = { uid: '', email: '', password: '', name: '' }; 
    this.isUserListVisible = false; 
  }

  clearProductInputs() {
    this.newProduct = { id: '', name: '', price: 0, category: '', storeId: '' };
    this.isProductListVisible = false; 
  }

  deleteUser(userId: string) {
    if (!userId) {
      console.error('No se puede eliminar un usuario sin un ID válido.');
      return;
    }
    
    this.firestore.collection<User>('users').doc(userId).delete().then(() => {
      this.loadUsers(); 
    }).catch(error => {
      console.error('Error al eliminar usuario:', error);
    });
  }

  deleteProduct(productId: string) {
    this.firestore.collection<Product>('products').doc(productId).delete().then(() => {
      this.loadProducts(); 
    }).catch(error => {
      console.error('Error al eliminar producto:', error);
    });
  }

  selectTab(event: any) {
    this.selectedTab = event.detail.value; 
  }

  async openEditModal(user: User) {
    const modal = await this.modalCtrl.create({
      component: UserEditModalComponent,
      componentProps: { user }
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.updateUser(result.data); 
      }
    });

    return await modal.present();
  }

  async openEditProductModal(product: Product) {
    const modal = await this.modalCtrl.create({
      component: ProductsEditModalComponent, // Usa el nuevo modal de edición de productos
      componentProps: { product }
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.updateProduct(result.data); 
      }
    });

    return await modal.present();
  }

  updateUser(user: User) {
    if (!user.uid) {
      console.error('No se puede actualizar un usuario sin un ID válido.');
      return;
    }
  
    this.firestore.collection<User>('users').doc(user.uid).update(user).then(() => {
      this.loadUsers();
    }).catch(error => {
      console.error('Error al actualizar usuario:', error);
    });
  }

  updateProduct(product: Product) {
    if (!product.id) {
      console.error('No se puede actualizar un producto sin un ID válido.');
      return;
    }

    this.firestore.collection<Product>('products').doc(product.id).update(product).then(() => {
      this.loadProducts();
    }).catch(error => {
      console.error('Error al actualizar producto:', error);
    });
  }
  
}
