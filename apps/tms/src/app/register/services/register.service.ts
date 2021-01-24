import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_PATHS } from '../../api-paths';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<{}> {
    return this.http.post(API_PATHS.USERS.REGISTER, user);
  }

  getUserDetails(username: string): Observable<User> {
    return this.http.get(API_PATHS.USERS.GET_USER_DETAILS.replace('${username}', username)).pipe(map((users: User[]) => {
      return users[0];
    }));
  }

  checkUserRegistration(username: string): Observable<{}> {
    return this.http.get(
      API_PATHS.USERS.CHECK_USER_EXISTS.replace('${username}', username)
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(API_PATHS.USERS.UPDATE, user).pipe(map((users: User[]) => {
      return users[0];
    }));
  }
}
