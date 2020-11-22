import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { USERNAME_REGEX, PASSWORD_REGEX } from './forgot-password.constant';

@Component({
  selector: 'tms-workspace-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  hide = true;
  isPasswordFocused = false;
  isConfirmPasswordFocused = false;
  forgotPasswordForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(USERNAME_REGEX),
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