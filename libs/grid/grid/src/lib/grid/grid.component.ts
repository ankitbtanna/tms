import { Component, Input, OnInit } from '@angular/core';

import { GridSizeChangedEvent } from 'ag-grid-community';
import { StakeholderActionsComponent } from '../stake-holder-actions/stake-holder-actions.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() columnDefs;
  @Input() rowData;
  frameworkComponents;

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  onGridSizeChanged(params: GridSizeChangedEvent) {
    params.api.sizeColumnsToFit();
  }

  constructor() {
    this.frameworkComponents = {
      btnCellRenderer: StakeholderActionsComponent,
    };
  }
}
