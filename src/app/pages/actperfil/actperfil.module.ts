import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActperfilPageRoutingModule } from './actperfil-routing.module';

import { ActperfilPage } from './actperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActperfilPageRoutingModule
  ],
  declarations: [ActperfilPage]
})
export class ActperfilPageModule {}
