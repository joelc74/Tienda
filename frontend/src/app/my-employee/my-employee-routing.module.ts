import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyEmployeePage } from './my-employee.page';

const routes: Routes = [
  {
    path: '',
    component: MyEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyEmployeePageRoutingModule {}
