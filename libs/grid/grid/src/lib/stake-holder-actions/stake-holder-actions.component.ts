import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-stake-holder-actions',
  templateUrl: './stake-holder-actions.component.html',
  styleUrls: ['./stake-holder-actions.component.scss'],
})
export class StakeholderActionsComponent implements ICellRendererAngularComp {
  private params: any;

  refresh(params: any): boolean {
    return true;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  block(): void {
    this.params.blockStakeholder(this.params.data);
  }

  delete(): void {
    this.params.deleteStakeholder(this.params.data);
  }
}
