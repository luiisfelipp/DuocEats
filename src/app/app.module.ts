import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

// Importa los módulos de los modales
import { UserEditModalModule } from './user-edit-modal/user-edit-modal.module'; // Ajusta la ruta según sea necesario
import { ProductsEditModalModule } from './products-edit-modal/products-edit-modal.module'; // Ajusta la ruta según sea necesario

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    UserEditModalModule, // Agrega el módulo del modal de usuario
    ProductsEditModalModule // Agrega el módulo del modal de productos
  ],
  providers: [
    provideHttpClient(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
