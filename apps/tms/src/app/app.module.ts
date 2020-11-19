import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
