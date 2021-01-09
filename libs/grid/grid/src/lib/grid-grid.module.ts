import 'ag-grid-enterprise';

import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { StakeholderActionsComponent } from './stake-holder-actions/stake-holder-actions.component';
import { TenderActionsComponent } from './tender-actions/tender-actions.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    AgGridModule.withComponents([StakeholderActionsComponent, TenderActionsComponent])
  ],
  declarations: [GridComponent, StakeholderActionsComponent, TenderActionsComponent],
  exports: [GridComponent, StakeholderActionsComponent, TenderActionsComponent]
})
export class GridGridModule { }
