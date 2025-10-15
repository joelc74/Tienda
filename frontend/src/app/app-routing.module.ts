import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-store',
    loadChildren: () => import('./my-store/my-store.module').then(m => m.MyStorePageModule)
  },
  {
    path: 'add-store-form',
    loadChildren: () => import('./add-store-form/add-store-form.module').then(m => m.AddStoreFormPageModule)
  },
  {
    path: 'add-store-form/:id',
    loadChildren: () => import('./add-store-form/add-store-form.module').then(m => m.AddStoreFormPageModule)
  },
  {
    path: 'edit-store/:id',
    loadChildren: () => import('./add-store-form/add-store-form.module').then(m => m.AddStoreFormPageModule)
  },
  {
    path: 'my-employee',
    loadChildren: () => import('./my-employee/my-employee.module').then(m => m.MyEmployeePageModule)
  },
  {
    path: 'add-employee-form',
    loadChildren: () => import('./add-employee-form/add-employee-form.module').then(m => m.AddEmployeeFormPageModule)
  },
  {
    path: 'add-employee-form/:id',
    loadChildren: () => import('./add-employee-form/add-employee-form.module').then(m => m.AddEmployeeFormPageModule)
  },
  {
    path: 'edit-employee/:id',
    loadChildren: () => import('./add-employee-form/add-employee-form.module').then(m => m.AddEmployeeFormPageModule)
  },
  {
    path: 'my-suplier',
    loadChildren: () => import('./my-suplier/my-suplier.module').then(m => m.MySuplierPageModule)
  },
  {
    path: 'add-suplier-form',
    loadChildren: () => import('./add-suplier-form/add-suplier-form.module').then(m => m.AddSuplierFormPageModule)
  },
  {
    path: 'add-suplier-form/:id',
    loadChildren: () => import('./add-suplier-form/add-suplier-form.module').then(m => m.AddSuplierFormPageModule)
  },
  {
    path: 'edit-suplier/:id',
    loadChildren: () => import('./add-suplier-form/add-suplier-form.module').then(m => m.AddSuplierFormPageModule)
  },
  {
    path: 'my-product',
    loadChildren: () => import('./my-product/my-product.module').then(m => m.MyProductPageModule)
  },
  {
    path: 'add-product-form',
    loadChildren: () => import('./add-product-form/add-product-form.module').then(m => m.AddProductFormPageModule)
  },
  {
    path: 'add-product-form/:id',
    loadChildren: () => import('./add-product-form/add-product-form.module').then(m => m.AddProductFormPageModule)
  },
  {
    path: 'edit-product/:id',
    loadChildren: () => import('./add-product-form/add-product-form.module').then(m => m.AddProductFormPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
