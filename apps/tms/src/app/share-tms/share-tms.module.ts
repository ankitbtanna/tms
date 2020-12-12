import { CommonModule } from '@angular/common';
import { GridGridModule } from '@tms/grid';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareTmsComponent } from './share-tms/share-tms.component';
import { ShareTmsRoutingModule } from './share-tms-routing.module';
import { ShareTmsService } from './services/share-tms.service';

@NgModule({
  declarations: [ShareTmsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridGridModule,
    HttpClientModule,
    MaterialModule,
    ShareTmsRoutingModule,
  ],
  providers: [ShareTmsService],
})
export class ShareTmsModule {}
