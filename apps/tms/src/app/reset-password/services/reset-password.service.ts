import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { API_PATHS } from "../../api-paths";

@Injectable({
    providedIn: 'root'
})
export class ResetPasswordService {
    constructor(private http: HttpClient) { }

    validateToken(email: string, token: string): Observable<any> {
        return this.http.get(API_PATHS.FORGOT_PASSWORD.VERIFY_FORGOT_PASSWORD_TOKEN.replace('${email}', email).replace('${token}', token)).pipe(map((response: any) => {
            return response;
        }));
    }

    resetPassword(username: string, password: string): Observable<any> {
        return this.http.post(API_PATHS.USERS.UPDATE_PASSWORD, { username, password }).pipe(map((response: any) => {
            return response;
        }));
    }
}