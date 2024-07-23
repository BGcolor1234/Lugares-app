import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'lugares',
    pathMatch: 'full',
  },
  {
    path: 'lugares',
    loadComponent: () => import('./pages/lugares/lugares.page').then( m => m.LugaresPage)
  },
  {
    path: 'detalles',
    loadComponent: () => import('./pages/detalles/detalles.page').then( m => m.DetallesPage)
  },
];
