import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactUsModule } from './contact-us/contact-us.module';
import { CookieService } from 'ngx-cookie-service';
import { DashboardModule } from './dashboard/dashboard.module';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PaymentModule } from './payment/payment.module';
import { RegisterModule } from './register/register.module';
import { ShareTmsModule } from './share-tms/share-tms.module';
import { AuthGuardService } from './auth/auth-guard.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LoginModule,
    RegisterModule,
    DashboardModule,
    ContactUsModule,
    PaymentModule,
    ShareTmsModule
  ],
  providers: [CookieService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
