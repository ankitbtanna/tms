import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToasterService } from 'libs/ui/src/lib/toaster/services/toaster.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { USERNAME_REGEX } from './forgot-password.constant';
import { ForgotPasswordService } from './services/forgot-password.service';

@Component({
  selector: 'tms-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  hide = true;
  isLoading = false;
  forgotPasswordForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(USERNAME_REGEX),
    ]),
  });

  constructor(private toasterService: ToasterService, private cookieService: CookieService, private authService: AuthService, private forgotPasswordService: ForgotPasswordService) { }

  ngOnInit(): void {
    this.cookieService.deleteAll();
    this.authService.loggedIn.next(false);
  }

  generateForgotPasswordLink(): void {
    this.isLoading = true;
    this.forgotPasswordService.generateForgotPasswordLink().subscribe(() => {
      this.toasterService.showToast(
        'Reset link sent to your email.',
        'success'
      );
      this.forgotPasswordForm.reset();
      this.isLoading = false;
    });
  }
}
