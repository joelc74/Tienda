import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySuplierPage } from './my-suplier.page';

const routes: Routes = [
  {
    path: '',
    component: MySuplierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySuplierPageRoutingModule {}
