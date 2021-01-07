import * as _moment from 'moment';

import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
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
  TENDER_REFERENCE_NUMBER_REGEX
} from '../dashboard.constant';

import { TenderModel } from '../models/tender.model';

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
  selector: 'tms-create-tender',
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

  @Output() onCreateTender: EventEmitter<TenderModel> = new EventEmitter();

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
    tenderUserWebsite: new FormControl('')
  });

  createTender(): void {
    this.onCreateTender.emit(this.generateTenderPayload());
  }

  private generateTenderPayload(): TenderModel {
    const tenderPayload: TenderModel = {
      name: this.addTenderForm.controls.tenderName.value,
      amount: this.addTenderForm.controls.tenderAmount.value,
      fee: this.addTenderForm.controls.tenderFee.value,
      emd: this.addTenderForm.controls.tenderEMD.value,
      referenceNumber: this.addTenderForm.controls.tenderReferenceNumber.value,
      tenderId: this.addTenderForm.controls.tenderId.value,
      publishedDate: this.addTenderForm.controls.tenderPublishedDate.value,
      bidDueDate: this.addTenderForm.controls.tenderBidDueDate.value,
      bidCutOffTime: this.addTenderForm.controls.tenderBidCutOffTime.value,
      userKeyName: this.addTenderForm.controls.tenderUserKeyName.value,
      userLoginId: this.addTenderForm.controls.tenderUserLoginId.value,
      userPassword: this.addTenderForm.controls.tenderUserPassword.value,
      userWebsite: this.addTenderForm.controls.tenderUserWebsite.value,
      properties: {
        owner: '',
        createdDate: (new Date()).toString(),
        document: '',
        isDeleted: false,
        isComplete: false,
        isNotFilled: false
      }
    };
    return tenderPayload;
  }

  private forbiddenBidDueDate(control: FormControl) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const forbidden = new Date(control.value) < currentDate;
    return forbidden ? { forbiddenBidDueDate: { value: control.value } } : null;
  }
}
