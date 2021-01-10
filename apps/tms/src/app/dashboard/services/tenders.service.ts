/* eslint-disable no-underscore-dangle */
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

  deleteTender(tenderId: string): Observable<TenderModel> {
    return this.http.delete(API_PATHS.TENDERS.DELETE_TENDER.replace('${tenderId}', tenderId))
      .pipe(
        map((response: TenderModel) => response)
      );
  }

  completeTender(tender: TenderGridModel, isComplete: boolean): Observable<TenderModel> {
    const tenderPayload = this.transformTenderGridModelToTenderModel(tender);
    tenderPayload.properties.isComplete = isComplete;
    return this.http.put(API_PATHS.TENDERS.UPDATE_TENDER.replace('${tenderId}', tender._id), tenderPayload)
      .pipe(
        map((response: TenderModel) => response)
      );
  }

  getTenderStats(tenders: TenderModel[]): { [key: string]: number } {
    let [completed, active, cancelled] = [0, 0, 0];
    tenders.forEach((tender) => {
      if (tender.properties.isComplete) {
        completed += 1;
      }

      if (tender.properties.isNotFilled) {
        cancelled += 1;
      }
    });
    active = tenders.length - completed - cancelled;
    console.log(`Tenders: ${tenders.length}, completed: ${completed}, cancelled: ${cancelled}, active: ${active}`);
    return {
      completed,
      active,
      cancelled,
      completedPercentage: (completed / tenders.length) * 100,
      activePercentage: (active / tenders.length) * 100,
      cancelledPercentage: (cancelled / tenders.length) * 100
    };
  }

  private transformTenderGridModelToTenderModel(tender: TenderGridModel): TenderModel {
    const transformedTender = {
      _id: tender._id,
      __v: tender.__v,
      name: tender.name,
      amount: tender.amount,
      fee: tender.fee,
      emd: tender.emd,
      referenceNumber: tender.referenceNumber,
      tenderId: tender.tenderId,
      publishedDate: tender.publishedDate,
      bidDueDate: tender.bidDueDate,
      bidCutOffTime: tender.bidCutOffTime,
      userKeyName: tender.userKeyName,
      userLoginId: tender.userLoginId,
      userPassword: tender.userPassword,
      userWebsite: tender.userPassword,
      properties: {
        owner: tender.owner,
        createdDate: tender.createdDate,
        document: tender.document,
        isDeleted: tender.isDeleted,
        isComplete: tender.isComplete,
        isNotFilled: tender.isNotFilled
      }
    };

    return transformedTender;
  }
}
