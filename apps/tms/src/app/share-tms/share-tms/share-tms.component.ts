import { Component, OnInit } from '@angular/core';
import { DESCRIPTION_REGEX, NAME_REGEX } from '../share-tms.constant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { MOBILE_NUMBER_REGEX } from '../../register/register.constant';
import { ShareTmsService } from '../services/share-tms.service';
import { Stakeholder } from '../models/stakeholder.model';
import { AddStakeholderPayload } from '../models/add-stakeholder-payload.model';
import { DeleteStakeholderPayload } from '../models/delete-stakeholder-payload.model';
import { BlockStakeholderPayload } from '../models/block-stakeholder-payload.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-share-tms',
  templateUrl: './share-tms.component.html',
  styleUrls: ['./share-tms.component.scss'],
})
export class ShareTmsComponent implements OnInit {
  private loggedInUser: string;
  searchStakeholderKeyword = '';
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
    {
      field: 'name', sortable: true, minWidth: 500, filter: 'agSetColumnFilter', floatingFilter: true, filterParams: {
        applyMiniFilterWhileTyping: true,
        suppressSorting: true
      }
    },
    {
      field: 'mobileNumber', sortable: true, minWidth: 200, filter: 'agSetColumnFilter', floatingFilter: true, filterParams: {
        applyMiniFilterWhileTyping: true,
        suppressSorting: true
      }
    },
    {
      field: 'description', minWidth: 500, filter: 'agSetColumnFilter', floatingFilter: true, filterParams: {
        applyMiniFilterWhileTyping: true,
        suppressSorting: true
      }
    },
    {
      field: 'actions',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        blockStakeholder: this.blockStakeholder.bind(this),
        deleteStakeholder: this.deleteStakeholder.bind(this),
      },
      width: 200,
    },
  ];
  stakeholders$: Observable<Stakeholder[]>;

  constructor(private shareTmsService: ShareTmsService) { }

  ngOnInit(): void {
    this.loggedInUser = window.localStorage.getItem('loggedInUser');
    this.stakeholders$ = this.getAllStakeholders(this.loggedInUser);
  }

  resetShareTMSForm() {
    this.shareTMSForm.reset();
  }

  private blockStakeholder(stakeholder: any): void {
    this.blockSelectedStakeholder(stakeholder);
  }

  private deleteStakeholder(stakeholder: Stakeholder): void {
    this.deleteSelectedStakeholder(stakeholder);
  }

  private getAllStakeholders(owner: string): Observable<Stakeholder[]> {
    return this.shareTmsService.getAllStakeholders(owner);
  }

  addStakeholder(): void {
    const stakeholder: Stakeholder = {
      name: this.shareTMSForm.controls.name.value,
      mobileNumber: this.shareTMSForm.controls.mobileNumber.value,
      description: this.shareTMSForm.controls.description.value,
      isBlocked: false
    }
    const requestPayload: AddStakeholderPayload = {
      owner: this.loggedInUser,
      stakeholders: [
        stakeholder
      ]
    }
    this.shareTmsService.addStakeholder(requestPayload)
      .subscribe(() => {
        this.stakeholders$ = this.getAllStakeholders(this.loggedInUser);
        this.shareTMSForm.reset();
      });
  }

  private deleteSelectedStakeholder(stakeholder: Stakeholder): void {
    const deleteStakeholderPayload: DeleteStakeholderPayload = {
      owner: this.loggedInUser,
      mobileNumber: stakeholder.mobileNumber
    };
    this.shareTmsService.deleteStakeholder(deleteStakeholderPayload)
      .subscribe(() => {
        this.stakeholders$ = this.getAllStakeholders(this.loggedInUser);
      });
  }

  private blockSelectedStakeholder(stakeholder: Stakeholder): void {
    const blockStakeholderPayload: BlockStakeholderPayload = {
      owner: this.loggedInUser,
      mobileNumber: stakeholder.mobileNumber,
      isBlocked: !stakeholder.isBlocked
    };
    this.shareTmsService.blockStakeholder(blockStakeholderPayload)
      .subscribe(() => {
        this.stakeholders$ = this.getAllStakeholders(this.loggedInUser);
      });
  }

  filterStakeholders(data): void {
    this.searchStakeholderKeyword = data.currentTarget.value;
  }
}
