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
    },
    {
        path: 'forgot-password',
        loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
    }
];