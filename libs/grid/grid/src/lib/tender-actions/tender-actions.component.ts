import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-tender-actions',
  templateUrl: './tender-actions.component.html',
  styleUrls: ['./tender-actions.component.scss']
})
export class TenderActionsComponent implements ICellRendererAngularComp {
  params: any;

  refresh(params: any): boolean {
    return true;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  completeTender(): void {
    this.params.completeTender(this.params.data);
  }

  cancelTenderFiling(): void {
    this.params.cancelTenderFiling(this.params.data);
  }

  copyTenderInformation(): void {
    this.params.copyTenderInformation(this.params.data);
  }

  downloadTenderDocument(): void {
    this.params.downloadTenderDocument(this.params.data);
  }

  addTenderDocument(): void {
    this.params.addTenderDocument(this.params.data);
  }

  downloadTenderCalendar(): void {
    this.params.downloadTenderCalendar(this.params.data);
  }

  deleteTender(): void {
    this.params.deleteTender(this.params.data);
  }
}
