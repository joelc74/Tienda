import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmployeeFormPage } from './add-employee-form.page';

const routes: Routes = [
  {
    path: '',
    component: AddEmployeeFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEmployeeFormPageRoutingModule {}
