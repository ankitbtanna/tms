import { Component, Input } from '@angular/core';
import { GridSizeChangedEvent } from 'ag-grid-community';
import { ButtonCellRendererComponent } from '../button-cell-renderer/button-cell-renderer.component';

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
      btnCellRenderer: ButtonCellRendererComponent,
    };
  }
}
