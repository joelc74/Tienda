import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductFormPageRoutingModule } from './add-product-form-routing.module';

import { AddProductFormPage } from './add-product-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductFormPageRoutingModule
  ],
  declarations: [AddProductFormPage]
})
export class AddProductFormPageModule {}
