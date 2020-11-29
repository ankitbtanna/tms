import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/users.model';
import {
  USERNAME_REGEX,
  PASSWORD_REGEX,
  PAN_CARD_REGEX,
  MOBILE_NUMBER_REGEX,
} from '../register.constant';
import { RegisterService } from '../services/register.service';

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
  showError = false;
  usernameExists = false;
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(USERNAME_REGEX),
    ]),
    companyName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(150),
    ]),
    panCardNumber: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(PAN_CARD_REGEX),
    ]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(MOBILE_NUMBER_REGEX),
    ]),
    plan: new FormControl('trial', [Validators.required]),
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  checkUserRegistration() {
    if (this.registerForm.controls.username.value) {
      this.registerService
        .checkUserRegistration(this.registerForm.controls.username.value)
        .subscribe((response: any) => {
          this.usernameExists = response.status === 'failure';
        });
    }
  }

  resetErrorMessage() {
    this.usernameExists = false;
  }

  registerUser() {
    const registerForm = this.registerForm.value;
    const passwordForm = this.passwordForm.value;
    const isPremiumMember = registerForm.plan !== 'trial';
    const user: User = {
      username: registerForm.username,
      password: passwordForm.password,
      registrationDate: new Date().toString(),
      subscriptionStartDate: isPremiumMember
        ? new Date().setHours(0, 0, 0, 0).toString()
        : 'NA',
      subscriptionEndDate: isPremiumMember
        ? new Date().setHours(0, 0, 0, 0).toString()
        : 'NA',
      isPremiumMember: isPremiumMember,
      premiumMembershipReferenceId: isPremiumMember ? '1234' : 'NA',
      companyName: registerForm.companyName,
      address: registerForm.address,
      panCardNumber: registerForm.panCardNumber,
      mobileNumber: registerForm.mobileNumber,
    };
    this.registerService.registerUser(user).subscribe((response: any) => {
      if (response.status === 'success') {
        this.router.navigate(['/registration-success']);
      } else {
        this.showError = true;
      }
    });
  }
}
