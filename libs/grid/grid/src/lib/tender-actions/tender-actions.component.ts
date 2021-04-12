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

  isCompleteHovered = false;

  isCancelledHovered = false;

  isCopyHovered = false;

  isUploadHovered = false;

  isDeleteHovered = false;

  isViewDocumentHovered = false

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

  viewTenderDocument(): void {
    this.params.viewTenderDocument(this.params.data);
  }

  addTenderDocument(): void {
    this.params.addTenderDocument(this.params.data);
  }

  deleteTender(): void {
    this.params.deleteTender(this.params.data);
  }
}
