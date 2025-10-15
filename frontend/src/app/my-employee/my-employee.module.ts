import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyEmployeePageRoutingModule } from './my-employee-routing.module';

import { MyEmployeePage } from './my-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyEmployeePageRoutingModule
  ],
  declarations: [MyEmployeePage]
})
export class MyEmployeePageModule {}


