import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MOBILE_NUMBER_REGEX } from '../../register/register.constant';
import { DESCRIPTION_REGEX, NAME_REGEX } from '../share-tms.constant';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-share-tms',
  templateUrl: './share-tms.component.html',
  styleUrls: ['./share-tms.component.scss'],
})
export class ShareTmsComponent implements OnInit {
  shareTMSForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(NAME_REGEX),
    ]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(MOBILE_NUMBER_REGEX),
    ]),
    description: new FormControl('', [Validators.pattern(DESCRIPTION_REGEX)]),
  });

  constructor() {}

  ngOnInit(): void {}

  addStakeHolder() {}

  resetShareTMSForm() {
    this.shareTMSForm.reset();
  }
}
