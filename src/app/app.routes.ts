import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Services } from './pages/services/services';
import { Clients } from './pages/clients/clients';
import { Products } from './pages/products/products';
import { MainLayout } from './layout/main-layout/main-layout';
import { Books } from './pages/books/books';
import { WeddingCards } from './pages/wedding-cards/wedding-cards';
import { InvitationCards } from './pages/invitation-cards/invitation-cards';
import { Calendars } from './pages/calendars/calendars';
import { Posters } from './pages/posters/posters';
import { Stationary } from './pages/stationary/stationary';


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
            { path: 'products', component: Products, pathMatch: 'full'},
            { path: 'products/brouchers', component: Books, pathMatch: 'full'},
            { path: 'products/books', component: Books, pathMatch: 'full'},
            { path: 'products/wedding-cards', component: WeddingCards, pathMatch: 'full'},
            { path: 'products/invitation-cards', component: InvitationCards, pathMatch: 'full'},
            { path: 'products/calendars', component: Calendars, pathMatch: 'full'},
            { path: 'products/stationary', component: Stationary, pathMatch: 'full'},
            { path: 'products/posters', component: Posters, pathMatch: 'full'},
            { path: 'contact', component: Contact, pathMatch: 'full'},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
