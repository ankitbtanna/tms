import * as _moment from 'moment';

import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import {
  TENDER_AMOUNT_REGEX,
  TENDER_EMD_REGEX,
  TENDER_FEE_REGEX,
  TENDER_ID_REGEX,
  TENDER_NAME_REGEX,
  TENDER_REFERENCE_NUMBER_REGEX,
  TENDER_USER_WEBSITE_REGEX
} from '../dashboard.constant';

import { Component } from '@angular/core';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'tms-workspace-create-tender',
  templateUrl: './create-tender.component.html',
  styleUrls: ['./create-tender.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class CreateTenderComponent {
  date = new FormControl(moment());

  hide = true;

  addTenderForm: FormGroup = new FormGroup({
    tenderName: new FormControl('', [
      Validators.required,
      Validators.pattern(TENDER_NAME_REGEX)
    ]),
    tenderAmount: new FormControl('', [
      Validators.required,
      Validators.pattern(TENDER_AMOUNT_REGEX)
    ]),
    tenderFee: new FormControl('', [
      Validators.required,
      Validators.pattern(TENDER_FEE_REGEX)
    ]),
    tenderEMD: new FormControl('', [
      Validators.required,
      Validators.pattern(TENDER_EMD_REGEX)
    ]),
    tenderReferenceNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(TENDER_REFERENCE_NUMBER_REGEX)
    ]),
    tenderId: new FormControl('', [
      Validators.required,
      Validators.pattern(TENDER_ID_REGEX)
    ]),
    tenderPublishedDate: new FormControl('', [Validators.required]),
    tenderBidDueDate: new FormControl('', [
      Validators.required,
      this.forbiddenBidDueDate
    ]),
    tenderBidCutOffTime: new FormControl('', [Validators.required]),
    tenderUserKeyName: new FormControl(''),
    tenderUserLoginId: new FormControl(''),
    tenderUserPassword: new FormControl(''),
    tenderUserWebsite: new FormControl('', [
      Validators.pattern(TENDER_USER_WEBSITE_REGEX)
    ])
  });

  private forbiddenBidDueDate(control: FormControl) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const forbidden = new Date(control.value) < currentDate;
    return forbidden ? { forbiddenBidDueDate: { value: control.value } } : null;
  }
}
