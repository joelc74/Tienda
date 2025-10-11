import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-store',
    loadChildren: () => import('./my-store/my-store.module').then( m => m.MyStorePageModule)
  },
   {
    path: 'add-store-form',
    loadChildren: () => import('./add-store-form/add-store-form.module').then( m => m.AddStoreFormPageModule)
  },
  {
    path: 'add-store-form/:id',
    loadChildren: () => import('./add-store-form/add-store-form.module').then( m => m.AddStoreFormPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
