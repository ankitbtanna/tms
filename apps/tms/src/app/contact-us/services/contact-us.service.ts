import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { API_PATHS } from "../../api-paths";
import { ContactUsQuery } from "../models/contact-us-query.model";

@Injectable({
    providedIn: 'root'
})
export class ContactUsService {
    constructor(private http: HttpClient) { }

    createQuery(query: ContactUsQuery): Observable<ContactUsQuery> {
        return this.http.post(API_PATHS.CONTACT_US.CREATE_QUERY, query).pipe(map((response: ContactUsQuery) => {
            return response;
        }));
    }
}