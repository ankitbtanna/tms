/* eslint-disable import/no-unresolved */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { APP_COOKIES } from '../app.constant';
import { CookieService } from 'ngx-cookie-service';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { GRAPH_COLOURS } from './dashboard.constant';
import { MatDialog } from '@angular/material/dialog';
import { ModalPopupComponent } from '@tms/ui';
import { TenderGridModel } from './models/tender-grid.model';
import { TenderModel } from './models/tender.model';
import { TendersModelMapper } from './services/tenders.modelmapper';
import { TendersService } from './services/tenders.service';

@Component({
  selector: 'tms-workspace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('createTenderModalWrapper')
  createTenderModalWrapper: ModalPopupComponent

  @ViewChild('createTenderForm', { static: true, read: CreateTenderComponent })
  createTenderForm: CreateTenderComponent;

  graphColours = GRAPH_COLOURS;

  owner: string;

  columnDefs = [
    {
      field: 'name',
      pinned: 'left',
      sortable: true,
      resizable: true,
      minWidth: 500,
      wrapText: true,
      autoHeight: true
    },
    {
      field: 'amount',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'fee',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'emd',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'referenceNumber',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'tenderId',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'publishedDate',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'bidDueDate',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'bidCutOffTime',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'userKeyName',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'userLoginId',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'userPassword',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'userWebsite',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'owner',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'createdDate',
      sortable: true,
      resizable: true,
      minWidth: 200
    },
    {
      field: 'actions',
      sortable: true,
      resizable: true,
      minWidth: 200,
      pinned: 'right'
    }
  ];

  isLoadingTenders = false;

  tenders$: Observable<TenderModel[]> = of([]);

  rowData: TenderGridModel[] = [];

  // eslint-disable-next-line max-len
  constructor(
    private tendersService: TendersService,
    private tendersModelMapper: TendersModelMapper,
    private cookieService: CookieService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.owner = this.cookieService.get(APP_COOKIES.LOGGED_IN_USER);
    this.getTenders();
  }

  openAddTenderDialog(): void {
    this.createTenderModalWrapper.open();
  }

  createTender(tender: TenderModel): void {
    // eslint-disable-next-line no-param-reassign
    tender.properties.owner = this.owner;
    this.tendersService.createTender(tender).subscribe((tender) => {
      this.createTenderForm.setLoader(false);
      this.createTenderModalWrapper.close();
      this.getTenders();
    });
  }

  private getTenders() {
    this.isLoadingTenders = true;
    this.tenders$ = this.tendersService.getTendersByUsername().pipe(
      map((tenders) => {
        this.rowData = this.tendersModelMapper.getTenderDataForGrid(tenders);
        return tenders;
      }),
      finalize(() => {
        setTimeout(() => {
          this.isLoadingTenders = false;
        }, 5000);
      })
    );
  }
}
