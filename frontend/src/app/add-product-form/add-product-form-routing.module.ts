import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductFormPage } from './add-product-form.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProductFormPageRoutingModule {}
