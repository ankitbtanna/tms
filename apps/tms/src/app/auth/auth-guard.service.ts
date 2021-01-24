import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private cookieService: CookieService, private authService: AuthService) { }

    canActivate(): boolean {
        const ACCESS_TOKEN_COOKIE = 'access-token';
        const LOGGED_IN_USER = 'logged-in-user';
        const isCookiePresent = !!this.cookieService.get(ACCESS_TOKEN_COOKIE);
        const isLoggedInUserPresent = !!this.cookieService.get(LOGGED_IN_USER);
        if (!isCookiePresent || !isLoggedInUserPresent) {
            this.authService.loggedIn.next(false);
            this.router.navigate(['login']);
            return false;
        }
        this.authService.loggedIn.next(true);
        return true;
    }
}