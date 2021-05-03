import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { API_PATHS } from "../../api-paths";

@Injectable({
    providedIn: 'root'
})
export class ForgotPasswordService {
    constructor(private http: HttpClient) { }

    generateForgotPasswordLink(email: string): Observable<any> {
        return this.http.get(API_PATHS.FORGOT_PASSWORD.GENERATE_FORGOT_PASSWORD_LINK.replace('${email}', email)).pipe(map((response: any) => {
            return response;
        }));
    }
}