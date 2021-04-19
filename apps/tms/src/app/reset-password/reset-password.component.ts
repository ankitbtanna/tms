import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { PASSWORD_REGEX } from './reset-password.constant';

@Component({
  selector: 'tms-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  hide = true;
  isPasswordFocused = false;
  isConfirmPasswordFocused = false;

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

  constructor(private formBuilder: FormBuilder, private cookieService: CookieService, private authService: AuthService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.queryParams.email)
    console.log(this.router.snapshot.queryParams.token)
    this.cookieService.deleteAll();
    this.authService.loggedIn.next(false);
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }
}
