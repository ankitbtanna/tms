/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { APP_COOKIES } from '../app.constant';
import { CookieService } from 'ngx-cookie-service';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { GRAPH_COLOURS, TABS } from './dashboard.constant';
import { ModalPopupComponent } from '@tms/ui';
import { TenderActionsComponent } from 'libs/grid/grid/src/lib/tender-actions/tender-actions.component';
import { TenderGridModel } from './models/tender-grid.model';
import { TenderModel } from './models/tender.model';
import { TendersModelMapper } from './services/tenders.modelmapper';
import { TendersService } from './services/tenders.service';
import { ToasterService } from 'libs/ui/src/lib/toaster/services/toaster.service';
import { User } from '../register/models/users.model';
import { SubscriptionDetails } from './models/subscription-interface.model';

@Component({
  selector: 'tms-workspace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
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

  panelOpenState = false;

  selected = 'NONE';

  owner: string;

  frameworkComponents;

  selectedTender: TenderGridModel = undefined;

  userSubscriptionDetails: SubscriptionDetails;
  isUserSubscriptionExpired = false;

  columnDefs = [
    {
      field: 'name',
      pinned: 'left',
      sortable: true,
      resizable: true,
      minWidth: 500,
      wrapText: true,
      autoHeight: true,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'amount',
      sortable: true,
      resizable: true,
      minWidth: 200,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'fee',
      sortable: true,
      resizable: true,
      minWidth: 200,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'emd',
      sortable: true,
      resizable: true,
      minWidth: 200,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'referenceNumber',
      sortable: true,
      resizable: true,
      minWidth: 200,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'tenderId',
      sortable: true,
      resizable: true,
      minWidth: 200,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'publishedDate',
      sortable: true,
      resizable: true,
      minWidth: 200,
      valueFormatter: this.dateFormatterPublishedDate.bind(this),
      filter: 'agDateColumnFilter',
    },
    {
      field: 'bidDueDate',
      sortable: true,
      resizable: true,
      minWidth: 200,
      filter: 'agDateColumnFilter',
      valueFormatter: this.dateFormatterBidDueDate.bind(this),
    },
    {
      field: 'createdDate',
      sortable: true,
      resizable: true,
      minWidth: 200,
      filter: 'agDateColumnFilter',
      valueFormatter: this.dateFormatterCreatedDate.bind(this),
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
      minWidth: 200,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'owner',
      sortable: true,
      resizable: true,
      minWidth: 200,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'isNotFilled',
      sortable: true,
      resizable: true,
      minWidth: 200,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'isComplete',
      sortable: true,
      resizable: true,
      minWidth: 200,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'isActive',
      sortable: true,
      resizable: true,
      minWidth: 200,
      filter: 'agTextColumnFilter',
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

  activeTab = TABS[0].toLowerCase();

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

  ngOnDestroy(): void {
    this.selectedTender = undefined;
  }

  ngOnInit(): void {
    this.owner = this.cookieService.get(APP_COOKIES.LOGGED_IN_USER);
    this.tendersService.getUserSubscriptionDetails(this.owner).subscribe((userSubscriptionDetails) => {
      const currentDate = new Date();
      const subscriptionEndDate = new Date(userSubscriptionDetails.subscriptionEndDate);
      this.userSubscriptionDetails = userSubscriptionDetails;
      this.isUserSubscriptionExpired = currentDate.getTime() > subscriptionEndDate.getTime();
    });
    this.getTenders(this.activeTab);
  }

  openAddTenderDialog(): void {
    this.createTenderModalWrapper.open();
  }

  isSubscriptionEndDatePast(subscriptionEndDate): boolean {
    const endDate = new Date(subscriptionEndDate);
    const currentDate = new Date();
    return currentDate < endDate;
  }

  createTender(tender: TenderModel): void {
    // eslint-disable-next-line no-param-reassign
    tender.properties.owner = this.owner;
    this.tendersService.createTender(tender).subscribe(() => {
      this.createTenderForm.setLoader(false);
      this.createTenderModalWrapper.close();
      this.getTenders(TABS[0].toLowerCase());
      this.toasterService.showToast('Tender created successfully.');
    }, () => {
      this.toasterService.showToast('Error creating tender. Please contact admin.', 'error');
    });
  }

  toggleTenderDetails(data): void {
    this.selectedTender = data[0];
  }

  closeTenderDetails(): void {
    this.selectedTender = undefined;
  }

  setSelectedTender(tender): void {
    this.selectedTender = tender;
  }

  tabClick(type) {
    this.setSelectedTender(undefined);
    this.activeTab = TABS[type.index].toLowerCase();
    this.getTenders(this.activeTab);
  }

  private getTenders(kind: string) {
    this.isLoadingTenders = true;
    this.showDashboard = false;
    this.tenders$ = this.tendersService.getTendersByUsername(kind).pipe(
      map((tenders) => {
        this.rowData = this.tendersModelMapper.getTenderDataForGrid(tenders);
        this.tenderStats = this.tendersService.getTenderStats(tenders);
        this.showDashboard = true;
        return tenders;
      }),
      finalize(() => {
        setTimeout(() => {
          this.isLoadingTenders = false;
          let tenderKind = '';
          if (kind === 'all') {
            tenderKind = 'all'
          } else if (kind === 'active') {
            tenderKind = 'upcoming'
          } else if (kind === 'complete') {
            tenderKind = 'completed'
          } else {
            tenderKind = 'not filled'
          }
          this.toasterService.showToast(`Showing ${tenderKind} tenders.`);
        }, 500);
      })
    );
  }

  private completeTender(tender: TenderGridModel): void {
    this.setSelectedTender(undefined);
    this.tendersService.completeTender(tender, true).subscribe(() => {
      this.getTenders(this.activeTab);
      this.toasterService.showToast('Tender is completed.');
    });
  }

  private cancelTenderFiling(tender: TenderGridModel): void {
    this.setSelectedTender(undefined);
    this.tendersService.cancelTender(tender, true).subscribe(() => {
      this.getTenders(this.activeTab);
      this.toasterService.showToast('Tender is cancelled.');
    });
  }

  private viewTenderDocument(tender: TenderGridModel): void {
    this.setSelectedTender(undefined);
    this.tender = tender;
    this.pdfViewerModalMapper.open();
  }

  private activateTender(tender: TenderGridModel): void {
    this.setSelectedTender(undefined);
    if (tender.isComplete || tender.isNotFilled || tender.isDeleted) {
      this.tendersService.activateTender(tender).subscribe(() => {
        this.getTenders(this.activeTab);
        this.toasterService.showToast('Tender is activated.');
      });
    } else {
      this.toasterService.showToast('Tender is already activate.', 'info');
    }
  }

  private copyTenderInformation(tender: TenderGridModel): void {
    this.setSelectedTender(undefined);
    const tenderInformation = JSON.stringify(tender, null, 4);
    navigator.clipboard.writeText(tenderInformation).then(() => {
      this.toasterService.showToast('Copied to clipboard.');
    });
  }

  private downloadTenderDocument(tender: TenderGridModel): void {
    this.setSelectedTender(undefined);
    console.log(tender);
  }

  private addTenderDocument(tender: TenderGridModel): void {
    this.setSelectedTender(undefined);
    console.log(tender);
  }

  private downloadTenderCalendar(tender: TenderGridModel): void {
    this.setSelectedTender(undefined);
    console.log(tender);
  }

  private deleteTender(tender: TenderGridModel): void {
    this.setSelectedTender(undefined);
    this.tender = tender;
    this.deleteTenderModalWrapper.open();
  }

  delete(): void {
    this.tendersService.deleteTender(this.tender._id).subscribe(() => {
      this.getTenders(this.activeTab);
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

  private dateFormatterPublishedDate(params) {
    const dateAsString = params.data.publishedDate;
    const _zeroPad = num => (num < 10 ? '0' + num : num);
    const date = new Date(dateAsString);
    return `${_zeroPad(date.getDate())}/${_zeroPad(date.getMonth() + 1)}/${_zeroPad(date.getFullYear())}`;
  }

  private dateFormatterBidDueDate(params) {
    const dateAsString = params.data.bidDueDate;
    const _zeroPad = num => (num < 10 ? '0' + num : num);
    const date = new Date(dateAsString);
    return `${_zeroPad(date.getDate())}/${_zeroPad(date.getMonth() + 1)}/${_zeroPad(date.getFullYear())}`;
  }

  private dateFormatterCreatedDate(params) {
    const dateAsString = params.data.createdDate;
    const _zeroPad = num => (num < 10 ? '0' + num : num);
    const date = new Date(dateAsString);
    return `${_zeroPad(date.getDate())}/${_zeroPad(date.getMonth() + 1)}/${_zeroPad(date.getFullYear())}`;
  }
}
