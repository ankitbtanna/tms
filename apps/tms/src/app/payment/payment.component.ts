import { Component, OnDestroy, OnInit } from '@angular/core';
import { WindowRefService } from './WindowRefService';
import { SECRET_KEY } from './payment.constant';
import { CookieService } from 'ngx-cookie-service';
import { APP_COOKIES } from '../app.constant';
import { PaymentService } from './services/payment.service';
import { Transaction } from './models/transaction.model';
import { Order } from './models/order.model';
import { UserService } from './services/user.service';
import { User } from '../register/models/users.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [WindowRefService]
})
export class PaymentComponent implements OnInit, OnDestroy {
  private loggedInUser: string;
  private order: Order;
  private transaction: Transaction;
  private loggedInUserMobileNumber: string;

  constructor(
    private winRef: WindowRefService,
    private cookieService: CookieService,
    private paymentService: PaymentService,
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.loggedInUser = this.cookieService.get(APP_COOKIES.LOGGED_IN_USER);
    await this.userService.getUserContact(this.loggedInUser).subscribe((contact: string) => {
      this.loggedInUserMobileNumber = contact;
    });
    this.order = {
      amount: 100,
      currency: 'INR'
    }
    this.paymentService.generateOrderId(this.order).subscribe((order: Order) => {
      this.transaction = {
        username: this.loggedInUser,
        orderDate: new Date(),
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        razorpay_payment_id: 'XYZ',
        razorpay_signature: 'XYZ',
        successful: false
      }
      this.paymentService.createTransaction(this.transaction).subscribe((transaction) => {
        this.transaction._id = transaction._id;
        this.payWithRazor(transaction);
      }, (error) => {
        console.log(error);
      });
    });
  }

  ngOnDestroy() {
    this.order = undefined;
    this.loggedInUser = '';
    this.transaction = undefined;
  }

  payWithRazor(transaction: Transaction) {
    const options: any = {
      key: 'rzp_test_OhEHEss3A6g4fh',
      amount: 100,
      currency: 'INR',
      name: 'E-Bharat: Tender Management System',
      description: `for ${this.loggedInUser}`,
      image: 'assets/tms-payment-logo.webp',
      order_id: transaction.orderId,
      prefill: {
        contact: this.loggedInUserMobileNumber,
        email: this.loggedInUser
      },
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

      this.paymentService.verifyOrder(response.razorpay_order_id).subscribe((order) => {
        console.log(order);
        if ((order.amount === order.amount_paid) && order.amount_due === 0) {
          this.transaction.successful = true;
          this.transaction.razorpay_payment_id = response.razorpay_payment_id;
          this.transaction.razorpay_signature = response.razorpay_signature;
          this.paymentService.updateTransaction(this.transaction).subscribe((transaction) => {
            console.log(transaction);
          });
        }
      });
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