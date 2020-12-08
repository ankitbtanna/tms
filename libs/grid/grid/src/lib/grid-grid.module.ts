import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonCellRendererComponent } from './button-cell-renderer/button-cell-renderer.component';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([ButtonCellRendererComponent]),
  ],
  declarations: [GridComponent, ButtonCellRendererComponent],
  exports: [GridComponent, ButtonCellRendererComponent],
})
export class GridGridModule {}
