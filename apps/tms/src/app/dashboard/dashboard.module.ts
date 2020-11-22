import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material.module';
import { ProgressGraphComponent } from './progress-graph/progress-graph.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [DashboardComponent, ProgressGraphComponent],
  imports: [
    CommonModule,
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
