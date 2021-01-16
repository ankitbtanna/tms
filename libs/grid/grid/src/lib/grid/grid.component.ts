import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

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

  @Output() onRowSelection: EventEmitter<any> = new EventEmitter();

  rowSelection = 'single';

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  onGridSizeChanged(params: GridSizeChangedEvent) {
    params.api.sizeColumnsToFit();
  }

  onSelectionChanged(data): void {
    const rowData = data.api.getSelectedRows();
    this.onRowSelection.emit(rowData);
  }

  // validateData(params): string {
  //   return params.data?.isBlocked ? 'is-blocked' : '';
  // }
}
