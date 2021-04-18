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
  FormGroup
} from '@angular/forms';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';

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
  selector: 'tms-edit-tender',
  templateUrl: './edit-tender.component.html',
  styleUrls: ['./edit-tender.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class EditTenderComponent {
  date = new FormControl(moment());

  hide = true;

  isEditingTender = false;
  @Output() onEditTender: EventEmitter<TenderModel> = new EventEmitter();
  @Output() onCloseEditTender: EventEmitter<void> = new EventEmitter();

  editTenderForm: FormGroup = new FormGroup({
    tenderBidDueDate: new FormControl('', [
      this.forbiddenBidDueDate
    ]),
    tenderBidCutOffTime: new FormControl(''),
  });

  editTender(): void {
    this.setLoader(true);
    this.onEditTender.emit(this.generateTenderPayload());
  }

  setLoader(isLoading: boolean): void {
    this.isEditingTender = isLoading;
  }

  resetForm(): void {
    this.editTenderForm.reset();
  }

  private generateTenderPayload(): any {
    const tenderPayload: any = {
      bidDueDate: this.editTenderForm.controls.tenderBidDueDate.value,
      bidCutOffTime: this.editTenderForm.controls.tenderBidCutOffTime.value,
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
    this.onCloseEditTender.emit();
  }
}
