import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSuplierFormPage } from './add-suplier-form.page';

const routes: Routes = [
  {
    path: '',
    component: AddSuplierFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSuplierFormPageRoutingModule {}
