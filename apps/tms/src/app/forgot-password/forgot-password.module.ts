import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FORGOT_PASSWORD_ROUTES } from './forgot-password.routes';
import { ForgotPasswordComponent } from './forgot-password.component';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(FORGOT_PASSWORD_ROUTES)
  ],
  providers: [AuthService]
})
export class ForgotPasswordModule { }
