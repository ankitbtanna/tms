import { Component, OnInit } from '@angular/core';
import { DESCRIPTION_REGEX, NAME_REGEX } from '../share-tms.constant';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MOBILE_NUMBER_REGEX } from '../../register/register.constant';
import { of } from 'rxjs';

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
  columnDefs = [
    { field: 'name', sortable: true, minWidth: 500 },
    { field: 'mobile', sortable: true, minWidth: 200 },
    { field: 'description', minWidth: 500 },
    {
      field: 'actions',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        blockStakeholder: this.blockStakeholder,
        deleteStakeholder: this.deleteStakeholder,
      },
      width: 200,
    },
  ];
  stakeholders$ = of([
    {
      name: 'Ankit',
      mobile: '9049728492',
      description: 'Some details about this stakeholder',
    },
    {
      name: 'Ankit',
      mobile: '9049728492',
      description: 'Some details about this stakeholder',
    },
    {
      name: 'Ankit',
      mobile: '9049728492',
      description: 'Some details about this stakeholder',
    },
    {
      name: 'Ankit',
      mobile: '9049728492',
      description: 'Some details about this stakeholder',
    },
    {
      name: 'Ankit',
      mobile: '9049728492',
      description: 'Some details about this stakeholder',
    },
    {
      name: 'Ankit',
      mobile: '9049728492',
      description: 'Some details about this stakeholder',
    },
    {
      name: 'Ankit',
      mobile: '9049728492',
      description: 'Some details about this stakeholder',
    },
    {
      name: 'Ankit',
      mobile: '9049728492',
      description: 'Some details about this stakeholder',
    },
    {
      name: 'Ankit',
      mobile: '9049728492',
      description: 'Some details about this stakeholder',
    },
    {
      name: 'Ankit',
      mobile: '9049728492',
      description: 'Some details about this stakeholder',
    },
    {
      name: 'Ankit',
      mobile: '9049728492',
      description: 'Some details about this stakeholder',
    },
  ]);

  constructor() {}

  ngOnInit(): void {}

  addStakeHolder() {}

  resetShareTMSForm() {
    this.shareTMSForm.reset();
  }

  private blockStakeholder(stakeholder: any): void {
    alert(stakeholder);
  }

  private deleteStakeholder(stakeholder: any): void {
    alert(stakeholder);
  }
}
