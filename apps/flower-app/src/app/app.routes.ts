import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'ProductList', pathMatch: 'full'},
    {
        path: 'home',
        loadComponent: () =>
            import('./features/pages/home/home.component').then( (c) => c.HomeComponent),
        title: 'Home'
    },
    {
        path: 'ProductList',
        loadComponent: () =>
            import('./features/pages/product-list/product-list.component').then( (c) => c.ProductListComponent),
        title: 'ProductList'
    }
];
