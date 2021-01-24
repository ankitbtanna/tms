import { Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';

export const TMS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      )
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: 'share-tms',
    loadChildren: () =>
      import('./share-tms/share-tms.module').then((m) => m.ShareTmsModule),
    canActivate: [AuthGuardService]
  }
];
