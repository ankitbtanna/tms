import { APP_COOKIES } from './app.constant';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'tms-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tms';

  constructor(private cookieService: CookieService, private router: Router) {}

  logout(): void {
    this.cookieService.delete(APP_COOKIES.ACCESS_TOKEN);
    this.cookieService.delete(APP_COOKIES.LOGGED_IN_USER);
  }
}
