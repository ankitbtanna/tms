import 'ag-grid-enterprise';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { StakeholderActionsComponent } from './stake-holder-actions/stake-holder-actions.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AgGridModule.withComponents([StakeholderActionsComponent]),
  ],
  declarations: [GridComponent, StakeholderActionsComponent],
  exports: [GridComponent, StakeholderActionsComponent],
})
export class GridGridModule { }
