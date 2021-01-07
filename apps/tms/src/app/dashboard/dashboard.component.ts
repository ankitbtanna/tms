/* eslint-disable import/no-unresolved */
import { Component, OnInit, ViewChild } from '@angular/core';

import { APP_COOKIES } from '../app.constant';
import { CookieService } from 'ngx-cookie-service';
import { GRAPH_COLOURS } from './dashboard.constant';
import { MatDialog } from '@angular/material/dialog';
import { ModalPopupComponent } from '@tms/ui';
import { TenderModel } from './models/tender.model';
import { TendersService } from './services/tenders.service';

@Component({
  selector: 'tms-workspace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('createTenderModalWrapper')
  createTenderModalWrapper: ModalPopupComponent

  graphColours = GRAPH_COLOURS;

  owner: string;

  columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  // eslint-disable-next-line max-len
  constructor(private tendersService: TendersService, private cookieService: CookieService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.owner = this.cookieService.get(APP_COOKIES.LOGGED_IN_USER);
    this.tendersService.getTendersByUsername();
  }

  openAddTenderDialog(): void {
    this.createTenderModalWrapper.open();
  }

  createTender(tender: TenderModel): void {
    // eslint-disable-next-line no-param-reassign
    tender.properties.owner = this.owner;
    this.tendersService.createTender(tender).subscribe((tender) => {});
  }
}
