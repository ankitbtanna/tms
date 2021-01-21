import { APP_COOKIES } from './app.constant';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'tms-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tms';
  isLoggedIn = false;

  constructor(private cookieService: CookieService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((value: boolean) => {
      this.isLoggedIn = value;
    })
  }

  logout(): void {
    this.cookieService.delete(APP_COOKIES.ACCESS_TOKEN);
    this.cookieService.delete(APP_COOKIES.LOGGED_IN_USER);
    this.authService.loggedIn.next(false);
    this.router.navigate(['login']);
  }
}
