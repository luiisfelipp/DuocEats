import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperaClavePage } from './recupera-clave.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperaClavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperaClavePageRoutingModule {}
