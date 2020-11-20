import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { USERNAME_REGEX, PASSWORD_REGEX } from './register.constant';

@Component({
  selector: 'tms-workspace-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  hide = true;
  isPasswordFocused = false;
  isConfirmPasswordFocused = false;
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(USERNAME_REGEX),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(PASSWORD_REGEX),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(PASSWORD_REGEX),
    ]),
  });

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }
}
