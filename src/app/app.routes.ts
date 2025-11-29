import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Services } from './pages/services/services';
import { Clients } from './pages/clients/clients';
import { Products } from './pages/products/products';
import { MainLayout } from './layout/main-layout/main-layout';


export const routes: Routes = [
    { 
        path: '', 
        component: MainLayout, 
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: Home, pathMatch: 'full'},
            { path: 'about', component: About, pathMatch: 'full'},
            { path: 'services', component: Services, pathMatch: 'full'},
            { path: 'clients', component: Clients, pathMatch: 'full'},
            { 
                path: 'products', 
                component: Products, 
                pathMatch: 'full'
            },
            { path: 'contact', component: Contact, pathMatch: 'full'},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
