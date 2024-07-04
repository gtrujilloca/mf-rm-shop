import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component')
      .then(m => m.ProductsComponent)
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./pages/product/product.component')
      .then(m => m.ProductComponent)
  }
];
