import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Redirige a la página de login
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./seguridad/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./seguridad/register/register.module').then( m => m.RegisterPageModule)
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
    path: 'admin',
    loadChildren: () => import('./usuarios/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./usuarios/mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
  },


  // Otras rutas
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
