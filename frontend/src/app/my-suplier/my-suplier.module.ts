import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySuplierPageRoutingModule } from './my-suplier-routing.module';

import { MySuplierPage } from './my-suplier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySuplierPageRoutingModule
  ],
  declarations: [MySuplierPage]
})
export class MySuplierPageModule {}



