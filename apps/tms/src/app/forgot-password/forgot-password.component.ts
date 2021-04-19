import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  forgotPasswordForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(USERNAME_REGEX),
    ]),
  });

  constructor(private cookieService: CookieService, private authService: AuthService, private forgotPasswordService: ForgotPasswordService) { }

  ngOnInit(): void {
    this.cookieService.deleteAll();
    this.authService.loggedIn.next(false);
  }

  generateForgotPasswordLink(): void {
    this.forgotPasswordService.generateForgotPasswordLink().subscribe();
  }
}
