import { Routes } from "@angular/router";

export const TMS_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/login', 
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }
];