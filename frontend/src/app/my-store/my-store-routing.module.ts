import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { MyStorePage } from './my-store.page';

const routes: Routes = [
 // {
 //   path: 'home',
 //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)

 // },
 // {
 //   path: '',
 //   redirectTo: 'home',
 //   pathMatch: 'full'
 // },
  {
    path: 'my-store',
    loadChildren: () => import('./my-store.module').then(m => m.MyStorePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class MyStorePageRoutingModule {}
