import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToasterModule } from 'libs/ui/src/lib/toaster/toaster.module';
import { ContactUsService } from './services/contact-us.service';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { UiModule } from '@tms/ui';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, UiModule, ToasterModule, HttpClientModule, ContactUsRoutingModule, MaterialModule, ReactiveFormsModule],
  providers: [ContactUsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]
})
export class ContactUsModule { }
