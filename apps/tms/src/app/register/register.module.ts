import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { REGISTER_ROUTES } from './register.routes';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { UiModule } from '@tms/ui';

@NgModule({
  declarations: [RegisterComponent, RegistrationSuccessComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UiModule,
    RouterModule.forChild(REGISTER_ROUTES),
  ],
})
export class RegisterModule {}
