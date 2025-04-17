import { Routes } from '@angular/router';

import { ListComponent } from '@products/pages/list/list.component';
import { ProductDetailsComponent } from '@products/pages/product-details/product-details.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'product/:id',
                component: ProductDetailsComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];


