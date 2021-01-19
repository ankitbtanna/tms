import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ACCESS_TOKEN_COOKIE = 'access-token';
    const accessToken = this.cookieService.get(ACCESS_TOKEN_COOKIE);
    const modifiedRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
    });
    return next.handle(modifiedRequest);
  }
}
