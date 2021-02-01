import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, ContactUsRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class ContactUsModule { }
