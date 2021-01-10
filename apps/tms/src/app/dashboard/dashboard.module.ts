/* eslint-disable import/no-unresolved */
import { CommonModule } from '@angular/common';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { CurrencyFormatterDirective } from './directives/currency-formatter/currency-formatter.directive';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { GridGridModule } from '@tms/grid';
import { MaterialModule } from '../material.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgModule } from '@angular/core';
import { ProgressGraphComponent } from './progress-graph/progress-graph.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'libs/ui/src/lib/toaster/toaster.module';
import { UiModule } from '@tms/ui';

@NgModule({
  declarations: [
    CreateTenderComponent,
    CurrencyFormatterDirective,
    DashboardComponent,
    ProgressGraphComponent,
    DeletePopupComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GridGridModule,
    MaterialModule,
    ToasterModule,
    NgCircleProgressModule.forRoot({
      radius: 60,
      outerStrokeWidth: 10,
      innerStrokeWidth: 5,
      showBackground: false
    }),
    ReactiveFormsModule,
    UiModule
  ]
})
export class DashboardModule {}
