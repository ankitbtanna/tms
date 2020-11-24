import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterModule } from './register/register.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FooterComponent } from './footer/footer.component';
import { ContactUsModule } from './contact-us/contact-us.module'
import { PaymentModule } from './payment/payment.module';
@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule, LoginModule, RegisterModule, DashboardModule, ContactUsModule, PaymentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
