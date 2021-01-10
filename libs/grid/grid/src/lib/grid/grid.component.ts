import { Component, Input } from '@angular/core';

import { GridSizeChangedEvent } from 'ag-grid-community';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() columnDefs;

  @Input() rowData;

  @Input() frameworkComponents;

  @Input() validateData;

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  onGridSizeChanged(params: GridSizeChangedEvent) {
    params.api.sizeColumnsToFit();
  }

  // validateData(params): string {
  //   return params.data?.isBlocked ? 'is-blocked' : '';
  // }
}
