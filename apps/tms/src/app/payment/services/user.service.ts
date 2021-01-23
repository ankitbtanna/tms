import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_PATHS } from '../../api-paths';
import { User } from '../../register/models/users.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getUserContact(username: string): Observable<string> {
        return this.http.get(API_PATHS.USERS.GET_USER_DETAILS.replace('${username}', username)).pipe(map((users: User[]) => {
            return users[0].mobileNumber;
        }))
    }
}
