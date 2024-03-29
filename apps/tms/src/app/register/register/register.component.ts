import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  MOBILE_NUMBER_REGEX,
  PAN_CARD_REGEX,
  PASSWORD_REGEX,
  USERNAME_REGEX
} from '../register.constant';

import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { User } from '../models/users.model';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { APP_COOKIES } from '../../app.constant';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'tms-workspace-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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
      Validators.pattern(USERNAME_REGEX)
    ]),
    companyName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(150)
    ]),
    panCardNumber: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(PAN_CARD_REGEX)
    ]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(MOBILE_NUMBER_REGEX)
    ]),
    plan: new FormControl('trial', [Validators.required])
  });

  passwordForm = this.formBuilder.group(
    {
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
      confirmPassword: [
        '',
        [Validators.required, Validators.pattern(PASSWORD_REGEX)]
      ]
    },
    { validator: this.checkPasswords }
  );

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private cookieService: CookieService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.cookieService.deleteAll();
    this.authService.loggedIn.next(false);
  }

  // eslint-disable-next-line class-methods-use-this
  checkPasswords(group: FormGroup): { [key: string]: boolean } | null {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  checkUserRegistration(): void {
    if (this.registerForm.controls.username.value) {
      this.registerService
        .checkUserRegistration(this.registerForm.controls.username.value)
        .pipe(map((res) => {
          console.log(res);
        }),
          catchError((err) => {
            this.usernameExists = err.error.status === 400;
            return err;
          }))
        .subscribe((response: any) => {
          this.usernameExists = false;
        });
    }
  }

  resetErrorMessage(): void {
    this.usernameExists = false;
  }

  registerUser(): void {
    const registerForm = this.registerForm.value;
    const passwordForm = this.passwordForm.value;
    const isPremiumMember = registerForm.plan !== 'trial';
    const currentDate = new Date();
    const subscriptionEndDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)).toString();
    const user: User = {
      username: registerForm.username,
      password: passwordForm.password,
      registrationDate: new Date().toString(),
      subscriptionStartDate: isPremiumMember
        ? new Date(new Date().setHours(0, 0, 0, 0)).toString()
        : 'NA',
      subscriptionEndDate: isPremiumMember
        ? subscriptionEndDate
        : 'NA',
      isPremiumMember,
      premiumMembershipReferenceId: isPremiumMember ? 'UPDATE_ORDER_ID' : 'NA',
      companyName: registerForm.companyName,
      address: registerForm.address,
      panCardNumber: registerForm.panCardNumber,
      mobileNumber: registerForm.mobileNumber
    };
    this.registerService.registerUser(user).subscribe((response: any) => {
      if (response.status === 'success') {
        if (!isPremiumMember) {
          this.router.navigate(['/registration-success']);
        } else {
          this.cookieService.set(APP_COOKIES.LOGGED_IN_USER, user.username)
          this.router.navigate(['/payment']);
        }
      } else {
        this.showError = true;
      }
    });
  }
}
