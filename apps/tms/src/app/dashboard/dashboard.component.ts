/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { APP_COOKIES } from '../app.constant';
import { CookieService } from 'ngx-cookie-service';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { GRAPH_COLOURS } from './dashboard.constant';
import { ModalPopupComponent } from '@tms/ui';
import { TenderActionsComponent } from 'libs/grid/grid/src/lib/tender-actions/tender-actions.component';
import { TenderGridModel } from './models/tender-grid.model';
import { TenderModel } from './models/tender.model';
import { TendersModelMapper } from './services/tenders.modelmapper';
import { TendersService } from './services/tenders.service';
import { ToasterService } from 'libs/ui/src/lib/toaster/services/toaster.service';

@Component({
  selector: 'tms-workspace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('createTenderModalWrapper')
  createTenderModalWrapper: ModalPopupComponent;

  @ViewChild('deleteTenderModalWrapper')
  deleteTenderModalWrapper: ModalPopupComponent;

  @ViewChild('pdfViewerModalMapper')
  pdfViewerModalMapper: ModalPopupComponent;

  @ViewChild('createTenderForm', { static: true, read: CreateTenderComponent })
  createTenderForm: CreateTenderComponent;

  @ViewChild('deleteTenderPopup', { static: true, read: DeletePopupComponent })
  deleteTenderPopup: DeletePopupComponent;

  graphColours = GRAPH_COLOURS;

  owner: string;

  frameworkComponents;

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
      minWidth: 250,
      pinned: 'right',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        activateTender: this.activateTender.bind(this),
        completeTender: this.completeTender.bind(this),
        cancelTenderFiling: this.cancelTenderFiling.bind(this),
        copyTenderInformation: this.copyTenderInformation.bind(this),
        viewTenderDocument: this.viewTenderDocument.bind(this),
        downloadTenderDocument: this.downloadTenderDocument.bind(this),
        addTenderDocument: this.addTenderDocument.bind(this),
        downloadTenderCalendar: this.downloadTenderCalendar.bind(this),
        deleteTender: this.deleteTender.bind(this)
      }
    }
  ];

  isLoadingTenders = false;

  tenders$: Observable<TenderModel[]> = of([]);

  rowData: TenderGridModel[] = [];

  tender: TenderGridModel;

  showDashboard = false;

  validateData = (params) => {
    if (params.data?.isComplete) {
      return 'is-complete';
    }
    if (params.data?.isNotFilled) {
      return 'is-cancelled';
    }
    return '';
  };

  tenderStats: { [key: string]: number } = {
    completed: 0,
    completedPercentage: 0,
    active: 0,
    activePercentage: 0,
    cancelled: 0,
    cancelledPercentage: 0
  };

  // eslint-disable-next-line max-len
  constructor(
    private tendersService: TendersService,
    private tendersModelMapper: TendersModelMapper,
    private toasterService: ToasterService,
    private cookieService: CookieService
  ) {
    this.frameworkComponents = {
      btnCellRenderer: TenderActionsComponent
    };
  }

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
    this.tendersService.createTender(tender).subscribe(() => {
      this.createTenderForm.setLoader(false);
      this.createTenderModalWrapper.close();
      this.getTenders();
      this.toasterService.showToast('Tender created successfully.');
    }, () => {
      this.toasterService.showToast('Error creating tender. Please contact admin.', 'error');
    });
  }

  private getTenders() {
    this.isLoadingTenders = true;
    this.showDashboard = false;
    this.tenders$ = this.tendersService.getTendersByUsername().pipe(
      map((tenders) => {
        this.rowData = this.tendersModelMapper.getTenderDataForGrid(tenders);
        this.tenderStats = this.tendersService.getTenderStats(tenders);
        this.showDashboard = true;
        return tenders;
      }),
      finalize(() => {
        setTimeout(() => {
          this.isLoadingTenders = false;
          this.toasterService.showToast('Showing all tenders.');
        }, 5000);
      })
    );
  }

  private completeTender(tender: TenderGridModel): void {
    this.tendersService.completeTender(tender, true).subscribe(() => {
      this.getTenders();
      this.toasterService.showToast('Tender is completed.');
    });
  }

  private cancelTenderFiling(tender: TenderGridModel): void {
    this.tendersService.cancelTender(tender, true).subscribe(() => {
      this.getTenders();
      this.toasterService.showToast('Tender is cancelled.');
    });
  }

  private viewTenderDocument(tender: TenderGridModel): void {
    this.tender = tender;
    this.pdfViewerModalMapper.open();
  }

  private activateTender(tender: TenderGridModel): void {
    if (tender.isComplete || tender.isNotFilled || tender.isDeleted) {
      this.tendersService.activateTender(tender).subscribe(() => {
        this.getTenders();
        this.toasterService.showToast('Tender is activated.');
      });
    } else {
      this.toasterService.showToast('Tender is already activate.', 'info');
    }
  }

  private copyTenderInformation(tender: TenderGridModel): void {
    const tenderInformation = JSON.stringify(tender, null, 4);
    navigator.clipboard.writeText(tenderInformation).then(() => {
      this.toasterService.showToast('Copied to clipboard.');
    });
  }

  private downloadTenderDocument(tender: TenderGridModel): void {
    console.log(tender);
  }

  private addTenderDocument(tender: TenderGridModel): void {
    console.log(tender);
  }

  private downloadTenderCalendar(tender: TenderGridModel): void {
    console.log(tender);
  }

  private deleteTender(tender: TenderGridModel): void {
    this.tender = tender;
    this.deleteTenderModalWrapper.open();
  }

  delete(): void {
    this.tendersService.deleteTender(this.tender._id).subscribe(() => {
      this.getTenders();
      this.deleteTenderPopup.setDeletingTender(false);
      this.deleteTenderModalWrapper.close();
      this.toasterService.showToast('Tender is deleted.');
    });
  }

  cancel(): void {
    this.deleteTenderModalWrapper.close();
  }

  closePdfViewer(): void {
    this.pdfViewerModalMapper.close();
  }
}
