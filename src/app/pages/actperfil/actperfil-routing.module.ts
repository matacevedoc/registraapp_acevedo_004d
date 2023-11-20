import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActperfilPage } from './actperfil.page';

const routes: Routes = [
  {
    path: '',
    component: ActperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActperfilPageRoutingModule {}
