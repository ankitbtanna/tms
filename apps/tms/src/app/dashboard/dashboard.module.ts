import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material.module';
import { ProgressGraphComponent } from './progress-graph/progress-graph.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressGraphComponent,
    CreateTenderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    NgCircleProgressModule.forRoot({
      radius: 60,
      outerStrokeWidth: 10,
      innerStrokeWidth: 5,
      showBackground: false,
    }),
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
