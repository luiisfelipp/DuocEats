import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash', 
    pathMatch: 'full'
    
  },
  

  {
    path: 'login',
    loadChildren: () => import('./seguridad/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./seguridad/login/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'page1',
    loadChildren: () => import('./tienda/page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./tienda/page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./tienda/page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./usuarios/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./usuarios/mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
  },
  {
    path: 'recupera-clave',
    loadChildren: () => import('./seguridad/login/recupera-clave/recupera-clave.module').then( m => m.RecuperaClavePageModule)
  },
  {
    path: 'page4',
    loadChildren: () => import('./tienda/page4/page4.module').then( m => m.Page4PageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./admin-crud-products/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./admin-crud-products/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./admin-crud-products/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./admin-crud-products/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },   
  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then(m => m.UbicacionPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./usuarios//editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
  path: 'page5',
  loadChildren: () => import('./tienda/page5/page5.module').then( m => m.Page5PageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./pedido/pedido.module').then( m => m.PedidoPageModule)
  },

  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
