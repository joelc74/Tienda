import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSuplierFormPageRoutingModule } from './add-suplier-form-routing.module';

import { AddSuplierFormPage } from './add-suplier-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
    IonicModule,
    AddSuplierFormPageRoutingModule
  ],
  declarations: [AddSuplierFormPage]
})
export class AddSuplierFormPageModule {}


