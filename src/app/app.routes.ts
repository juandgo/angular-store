import { Routes } from '@angular/router';

// import { ProductDetailsComponent } from '@products/pages/product-details/product-details.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./domains/products/pages/list/list.component'),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./domains/info/pages/about/about.component'),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import(
            './domains/products/pages/product-details/product-details.component'
          ),
        // component: ProductDetailsComponent
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
