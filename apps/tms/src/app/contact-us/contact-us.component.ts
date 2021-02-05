import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsQuery } from './models/contact-us-query.model';
import { ContactUsService } from './services/contact-us.service';
import { CookieService } from 'ngx-cookie-service';
import { APP_COOKIES } from '../app.constant';
import { ToasterService } from 'libs/ui/src/lib/toaster/services/toaster.service';

@Component({
  selector: 'tms-workspace-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  contactUsForm: FormGroup = new FormGroup({
    subject: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] })
  });

  constructor(private contactUsService: ContactUsService, private cookieService: CookieService, private toasterService: ToasterService) { }

  createQuery() {
    if (this.contactUsForm.valid) {
      const query: ContactUsQuery = {
        subject: this.contactUsForm.controls.subject.value,
        description: this.contactUsForm.controls.description.value,
        date: (new Date()).toDateString(),
        isOpen: true,
        username: this.cookieService.get(APP_COOKIES.LOGGED_IN_USER)
      }
      this.contactUsService.createQuery(query).subscribe((query: ContactUsQuery) => {
        this.contactUsForm.reset();
        this.toasterService.showToast(`Case #${query.caseId} created. Please use this for further reference.`);
      });
    }
  }

  createCallRequest() {
    const query: ContactUsQuery = {
      subject: 'CALL_REQUEST',
      description: 'CALL_REQUEST',
      date: (new Date()).toDateString(),
      isOpen: true,
      username: this.cookieService.get(APP_COOKIES.LOGGED_IN_USER)
    }
    this.contactUsService.createQuery(query).subscribe((query: ContactUsQuery) => {
      this.contactUsForm.reset();
      this.toasterService.showToast(`Case #${query.caseId} created. You will request callback soon.`);
    });
  }

}
