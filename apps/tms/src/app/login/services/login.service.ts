import { API_PATHS } from '../../api-paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthentication } from '../models/user-authentication.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: UserAuthentication): Observable<any> {
    return this.http.post(API_PATHS.USERS.LOGIN, user);
  }
}
