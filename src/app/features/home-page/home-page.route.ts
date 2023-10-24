import { Route } from '@angular/router';


export const HOME_PAGE_ROUTE: Route[] = [
    { path: 'home', loadComponent: () => import('../intro/intro.component').then(c => c.IntroComponent) },
    { path: 'products', loadComponent: () => import('../products/products.component').then(c => c.ProductsComponent) },
    { path: 'login', loadComponent: () => import('../log-in/log-in.component').then(c => c.LogInComponent) },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
]