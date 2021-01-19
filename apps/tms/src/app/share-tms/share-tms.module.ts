import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { GridGridModule } from '@tms/grid';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareTmsComponent } from './share-tms/share-tms.component';
import { ShareTmsRoutingModule } from './share-tms-routing.module';
import { ShareTmsService } from './services/share-tms.service';
import { TokenInterceptor } from '../interceptors/token.interceptor';

@NgModule({
  declarations: [ShareTmsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridGridModule,
    HttpClientModule,
    MaterialModule,
    ShareTmsRoutingModule
  ],
  providers: [
    ShareTmsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class ShareTmsModule { }
