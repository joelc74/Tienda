import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEmployeeFormPageRoutingModule } from './add-employee-form-routing.module';

import { AddEmployeeFormPage } from './add-employee-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEmployeeFormPageRoutingModule
  ],
  declarations: [AddEmployeeFormPage]
})
export class AddEmployeeFormPageModule {}
