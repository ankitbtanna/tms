import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FORGOT_PASSWORD_ROUTES } from './forgot-password.routes';
import { ForgotPasswordComponent } from './forgot-password.component';
import { AuthService } from '../services/auth.service';
import { ForgotPasswordService } from './services/forgot-password.service';
import { ToasterModule } from 'libs/ui/src/lib/toaster/toaster.module';
import { UiModule } from '@tms/ui';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    ToasterModule,
    MaterialModule,
    RouterModule.forChild(FORGOT_PASSWORD_ROUTES)
  ],
  providers: [AuthService, ForgotPasswordService]
})
export class ForgotPasswordModule { }
