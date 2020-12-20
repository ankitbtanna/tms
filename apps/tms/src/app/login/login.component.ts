import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PASSWORD_REGEX, USERNAME_REGEX } from './login.constant';

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { UserAuthentication } from './models/user-authentication.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

  isPasswordFocused = false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(USERNAME_REGEX)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(PASSWORD_REGEX)
    ])
  });

  // eslint-disable-next-line max-len
  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) {}

  login(): void {
    if (this.loginForm.valid) {
      const user: UserAuthentication = this.loginForm.value;
      this.loginService.login(user).subscribe((response) => {
        if (response.status === 'success') {
          window.localStorage.setItem('loggedInUser', response.username);
          this.cookieService.set('logged-in-user', response.username);
          this.cookieService.set('access-token', response.accessToken);
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }
}
