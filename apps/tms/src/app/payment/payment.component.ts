import { Component, OnInit } from '@angular/core';
import { WindowRefService } from './WindowRefService';
import {SECRET_KEY} from './payment.constant';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'tms-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss'],
    providers: [WindowRefService]
})
export class PaymentComponent implements OnInit{

    constructor(private winRef: WindowRefService) {}
    ngOnInit() {
      this.createRzpayOrder();
    }
    createRzpayOrder(){
    // call api to create order_id
     
      this.payWithRazor();
    }

    payWithRazor() {
        const options: any = {
            key: 'rzp_test_g46uhFt0MrurpH',
            amount: 125500,
            currency: 'INR',
            name: 'Ankit',
            description: 'for sample 1',
            image: 'image/Machu_Picchu,_Peru.jpg',
           // order_id: val, // order_id created by you in backend
            modal: {
                // We should prevent closing of the form when esc key is pressed.
                escape: false,
              },
              notes: {
                // include notes if any
                note : "first"
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