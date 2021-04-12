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
  TENDER_FEE_REGEX
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

  isCreatingTender = false;

  @Output() onCreateTender: EventEmitter<TenderModel> = new EventEmitter();
  @Output() onCloseCreateTender: EventEmitter<void> = new EventEmitter();

  createTenderForm: FormGroup = new FormGroup({
    tenderName: new FormControl('', [
      Validators.required
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
      Validators.required
    ]),
    tenderId: new FormControl('', [
      Validators.required
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
    this.setLoader(true);
    this.onCreateTender.emit(this.generateTenderPayload());
  }

  setLoader(isLoading: boolean): void {
    this.isCreatingTender = isLoading;
  }

  resetForm(): void {
    this.createTenderForm.reset();
  }

  private generateTenderPayload(): TenderModel {
    const tenderPayload: TenderModel = {
      name: this.createTenderForm.controls.tenderName.value,
      amount: this.createTenderForm.controls.tenderAmount.value,
      fee: this.createTenderForm.controls.tenderFee.value,
      emd: this.createTenderForm.controls.tenderEMD.value,
      referenceNumber: this.createTenderForm.controls.tenderReferenceNumber.value,
      tenderId: this.createTenderForm.controls.tenderId.value,
      publishedDate: this.createTenderForm.controls.tenderPublishedDate.value,
      bidDueDate: this.createTenderForm.controls.tenderBidDueDate.value,
      bidCutOffTime: this.createTenderForm.controls.tenderBidCutOffTime.value,
      userKeyName: this.createTenderForm.controls.tenderUserKeyName.value,
      userLoginId: this.createTenderForm.controls.tenderUserLoginId.value,
      userPassword: this.createTenderForm.controls.tenderUserPassword.value,
      userWebsite: this.createTenderForm.controls.tenderUserWebsite.value,
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

  closeModal(): void {
    this.onCloseCreateTender.emit();
  }
}
