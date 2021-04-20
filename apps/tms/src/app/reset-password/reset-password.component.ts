import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'libs/ui/src/lib/toaster/services/toaster.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { PASSWORD_REGEX } from './reset-password.constant';
import { ResetPasswordService } from './services/reset-password.service';

@Component({
  selector: 'tms-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  hide = true;
  isPasswordFocused = false;
  isConfirmPasswordFocused = false;
  isLoading = false;
  loadingMessage = '';

  passwordForm = this.formBuilder.group(
    {
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
      confirmPassword: [
        '',
        [Validators.required, Validators.pattern(PASSWORD_REGEX)],
      ],
    },
    { validator: this.checkPasswords }
  );

  constructor(private resetPasswordService: ResetPasswordService, private toasterService: ToasterService, private formBuilder: FormBuilder, private cookieService: CookieService, private authService: AuthService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.verifyToken(this.router.snapshot.queryParams.email, this.router.snapshot.queryParams.token);
    this.cookieService.deleteAll();
    this.authService.loggedIn.next(false);
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  verifyToken(email: string, token: string) {
    this.isLoading = true;
    this.loadingMessage = 'Verifying request...';
    this.resetPasswordService.validateToken(email, token).subscribe(() => {
      this.isLoading = false;
      this.toasterService.showToast(
        'Set your new password.',
        'info'
      );
    });
  }

  resetPassword() {
    this.isLoading = true;
    this.loadingMessage = 'Verifying request...';
    const password = this.passwordForm.controls.password.value;
    this.resetPasswordService.resetPassword(this.router.snapshot.queryParams.email, password).subscribe(() => {
      this.isLoading = false;
      this.passwordForm.reset();
      this.toasterService.showToast(
        'Password reset successfully.',
        'success'
      );
    })
  }
}
