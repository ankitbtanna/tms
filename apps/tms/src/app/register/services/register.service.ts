import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATHS } from '../../api-paths';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<{}> {
    return this.http.post(API_PATHS.USERS.REGISTER, user);
  }

  checkUserRegistration(username: string): Observable<{}> {
    return this.http.get(
      API_PATHS.USERS.CHECK_USER_EXISTS.replace('${username}', username)
    );
  }
}
