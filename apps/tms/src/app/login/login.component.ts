import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PASSWORD_REGEX, USERNAME_REGEX } from './login.constant';

import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { UserAuthentication } from './models/user-authentication.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  isPasswordFocused = false;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(USERNAME_REGEX),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(PASSWORD_REGEX),
    ]),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    if (this.loginForm.valid) {
      const user: UserAuthentication = this.loginForm.value;
      this.loginService.login(user).subscribe((response) => {
        if (response.status === 'success') {
          window.localStorage.setItem('loggedInUser', response.username);
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }
}
