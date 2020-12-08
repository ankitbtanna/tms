import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {
  ICellRendererParams,
  IAfterGuiAttachedParams,
} from 'ag-grid-community';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-button-cell-renderer',
  templateUrl: './button-cell-renderer.component.html',
  styleUrls: ['./button-cell-renderer.component.scss'],
})
export class ButtonCellRendererComponent
  implements ICellRendererAngularComp, OnDestroy {
  private params: any;

  refresh(params: any): boolean {
    return true;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  btnClickedHandler() {
    this.params.clicked(this.params.data);
  }

  ngOnDestroy(): void {}
}
