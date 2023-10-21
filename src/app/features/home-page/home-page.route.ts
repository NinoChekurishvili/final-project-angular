import { Route } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { IntroComponent } from '../intro/intro.component';

export const HOME_PAGE_ROUTE: Route[] = [
    { path: 'home', loadComponent: () => import('../intro/intro.component').then(c => c.IntroComponent) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

]