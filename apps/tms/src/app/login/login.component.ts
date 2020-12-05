import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USERNAME_REGEX, PASSWORD_REGEX } from './login.constant';
import { UserAuthentication } from './models/user-authentication.model';
import { LoginService } from './services/login.service';

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
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }
}
