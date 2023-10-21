import { Route } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';

export const APP_ROUTE: Route[] = [
    {
        path: '',
        component: HomePageComponent,
        loadChildren: () => import('./features/home-page/home-page.route').then((m) => m.HOME_PAGE_ROUTE),
    }
];


