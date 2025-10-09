import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStoreFormPageRoutingModule } from './add-store-form-routing.module';

import { AddStoreFormPage } from './add-store-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddStoreFormPageRoutingModule
  ],
  declarations: [AddStoreFormPage]
})
export class AddStoreFormPageModule {}
