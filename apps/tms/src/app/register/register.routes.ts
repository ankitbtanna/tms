import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';

export const REGISTER_ROUTES: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path: 'registration-success',
    component: RegistrationSuccessComponent,
  },
];
