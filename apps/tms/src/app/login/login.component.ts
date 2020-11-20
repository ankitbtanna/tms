import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { USERNAME_REGEX, PASSWORD_REGEX } from './login.constant';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  isPasswordFocused = false;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(USERNAME_REGEX)]),
    password: new FormControl('', [Validators.required, Validators.pattern(PASSWORD_REGEX)])
  });
  
  constructor() { }

  ngOnInit(): void {
  }
}
