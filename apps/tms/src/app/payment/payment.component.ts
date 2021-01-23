import { Component, OnInit } from '@angular/core';
import { WindowRefService } from './WindowRefService';
import { SECRET_KEY } from './payment.constant';
import { CookieService } from 'ngx-cookie-service';
import { APP_COOKIES } from '../app.constant';
import { PaymentService } from './services/payment.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [WindowRefService]
})
export class PaymentComponent implements OnInit {
  private loggedInUser: string;
  private orderId: string;

  constructor(
    private winRef: WindowRefService,
    private cookieService: CookieService,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.orderId = this.paymentService.generateOrderId();
    this.loggedInUser = this.cookieService.get(APP_COOKIES.LOGGED_IN_USER);
    this.createRzpayOrder();
  }

  createRzpayOrder() {
    // call api to create order_id
    this.payWithRazor();
  }

  payWithRazor() {
    const options: any = {
      key: 'rzp_test_g46uhFt0MrurpH',
      amount: 100,
      currency: 'INR',
      name: 'E-Bharat: Tender Management System',
      description: `for ${this.loggedInUser}`,
      image: 'assets/tms-payment-logo.webp',
      order_id: this.orderId, // order_id created by you in backend
      modal: {
        escape: false,
      },
      notes: {
        note: 'Yearly subscription. E-Bharat: TMS'
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      options.response = response;
      console.log(response);
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }
}