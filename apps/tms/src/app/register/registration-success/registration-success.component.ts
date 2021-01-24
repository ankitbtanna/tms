import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APP_COOKIES } from '../../app.constant';
import { User } from '../models/users.model';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'tms-workspace-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationSuccessComponent implements OnInit, OnDestroy {
  private registeredUser: string;
  private paymentReferenceNumber: string;
  constructor(private cookieService: CookieService, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registeredUser = this.cookieService.get(APP_COOKIES.LOGGED_IN_USER);
    this.paymentReferenceNumber = this.cookieService.get(APP_COOKIES.PAYMENT_REFERENCE_NUMBER);
    if (this.registeredUser && this.paymentReferenceNumber) {
      this.registerService.updateUser(this.registeredUser, this.paymentReferenceNumber).subscribe((user: User) => {
        console.log('Updated premium membership reference ', user.premiumMembershipReferenceId);
      });
    }
  }

  ngOnDestroy(): void {
    this.cookieService.deleteAll();
  }

}
