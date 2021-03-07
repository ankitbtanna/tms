/* eslint-disable no-underscore-dangle */
/* eslint-disable no-template-curly-in-string */
import { API_PATHS } from '../../api-paths';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TenderGridModel } from '../models/tender-grid.model';
import { TenderModel } from '../models/tender.model';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '../../register/models/users.model';
import { SubscriptionDetails } from '../models/subscription-interface.model';

@Injectable({
  providedIn: 'root'
})
export class TendersService {
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getTendersByUsername(kind: string): Observable<TenderModel[]> {
    const username = this.cookieService.get('logged-in-user');
    let api_url = '';
    if (kind === 'active') {
      api_url = API_PATHS.TENDERS.GET_ACTIVE_TENDERS_BY_USERNAME.replace('${username}', username);
    } else if (kind === 'complete') {
      api_url = API_PATHS.TENDERS.GET_COMPLETE_TENDERS_BY_USERNAME.replace('${username}', username);
    } else if (kind === 'not_filled') {
      api_url = API_PATHS.TENDERS.GET_NOT_FILLED_TENDERS_BY_USERNAME.replace('${username}', username);
    } else {
      api_url = API_PATHS.TENDERS.GET_TENDERS_BY_USERNAME.replace('${username}', username);
    }
    return this.http.get(api_url)
      .pipe(
        map((response: TenderModel[]) => response),
        shareReplay(1)
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
    tenderPayload.properties.isNotFilled = false;
    return this.http.put(API_PATHS.TENDERS.UPDATE_TENDER.replace('${tenderId}', tender._id), tenderPayload)
      .pipe(
        map((response: TenderModel) => response)
      );
  }

  cancelTender(tender: TenderGridModel, isCancelled: boolean): Observable<TenderModel> {
    const tenderPayload = this.transformTenderGridModelToTenderModel(tender);
    tenderPayload.properties.isNotFilled = isCancelled;
    tenderPayload.properties.isComplete = false;
    return this.http.put(API_PATHS.TENDERS.UPDATE_TENDER.replace('${tenderId}', tender._id), tenderPayload)
      .pipe(
        map((response: TenderModel) => response)
      );
  }

  activateTender(tender: TenderGridModel): Observable<TenderModel> {
    const tenderPayload = this.transformTenderGridModelToTenderModel(tender);
    tenderPayload.properties.isNotFilled = false;
    tenderPayload.properties.isComplete = false;
    tenderPayload.properties.isDeleted = false;
    return this.http.put(API_PATHS.TENDERS.UPDATE_TENDER.replace('${tenderId}', tender._id), tenderPayload)
      .pipe(
        map((response: TenderModel) => response)
      );
  }

  getTenderStats(): Observable<{ [key: string]: number }> {
    return this.getTendersByUsername('all').pipe(map((tenders) => {
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
      return {
        completed,
        active,
        cancelled,
        completedPercentage: (completed / tenders.length) * 100,
        activePercentage: (active / tenders.length) * 100,
        cancelledPercentage: (cancelled / tenders.length) * 100
      };
    }));
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
      publishedDate: tender.publishedDate.toDateString(),
      bidDueDate: tender.bidDueDate.toDateString(),
      bidCutOffTime: tender.bidCutOffTime,
      userKeyName: tender.userKeyName,
      userLoginId: tender.userLoginId,
      userPassword: tender.userPassword,
      userWebsite: tender.userPassword,
      properties: {
        owner: tender.owner,
        createdDate: tender.createdDate.toDateString(),
        document: tender.document,
        isDeleted: tender.isDeleted,
        isComplete: tender.isComplete,
        isNotFilled: tender.isNotFilled
      }
    };

    return transformedTender;
  }

  getUserSubscriptionDetails(username: string): Observable<SubscriptionDetails> {
    return this.http.get(API_PATHS.USERS.GET_USER_SUBSCRIPTION_DETAILS.replace('${username}', username)).pipe(map((subscriptionDetails: SubscriptionDetails) => {
      return subscriptionDetails;
    }));
  }
}
