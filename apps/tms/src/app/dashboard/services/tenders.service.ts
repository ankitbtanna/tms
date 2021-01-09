/* eslint-disable no-template-curly-in-string */
import { API_PATHS } from '../../api-paths';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TenderGridModel } from '../models/tender-grid.model';
import { TenderModel } from '../models/tender.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TendersService {
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getTendersByUsername(): Observable<TenderModel[]> {
    const username = this.cookieService.get('logged-in-user');
    return this.http.get(API_PATHS.TENDERS.GET_TENDER_BY_USERNAME.replace('${username}', username))
      .pipe(
        map((response: TenderModel[]) => response)
      );
  }

  createTender(tender: TenderModel): Observable<TenderModel> {
    return this.http.post(API_PATHS.TENDERS.CREATE_TENDER, tender)
      .pipe(
        map((response: TenderModel) => response)
      );
  }

  deleteTender(tender: TenderGridModel): Observable<TenderModel> {
    return this.http.delete(API_PATHS.TENDERS.GET_TENDER_BY_USERNAME)
      .pipe(
        map((response: TenderModel) => response)
      );
  }
}
