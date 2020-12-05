import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareTmsRoutingModule } from './share-tms-routing.module';
import { ShareTmsComponent } from './share-tms/share-tms.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GridGridModule } from '@tms/grid';

@NgModule({
  declarations: [ShareTmsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridGridModule,
    MaterialModule,
    ShareTmsRoutingModule,
  ],
})
export class ShareTmsModule {}
