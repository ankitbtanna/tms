import { API_PATHS } from '../../api-paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TenderModel } from '../models/tender.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TendersService {
  constructor(private http: HttpClient) { }

  getTendersByUsername(): Observable<TenderModel[]> {
    return this.http.get(API_PATHS.TENDERS.GET_TENDER_BY_USERNAME)
      .pipe(
        map((response: TenderModel[]) => response)
      );
  }
}
