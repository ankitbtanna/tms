import { HttpClient, HttpResponse } from '@angular/common/http';

import { API_PATHS } from '../../api-paths';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stakeholder } from '../models/stakeholder.model';
import { map, shareReplay } from 'rxjs/operators';
import { AddStakeholderPayload } from '../models/add-stakeholder-payload.model';
import { DeleteStakeholderPayload } from '../models/delete-stakeholder-payload.model';
import { BlockStakeholderPayload } from '../models/block-stakeholder-payload.model';

@Injectable({
  providedIn: 'root',
})
export class ShareTmsService {
  constructor(private http: HttpClient) { }

  addStakeholder(stakeholder: AddStakeholderPayload): Observable<Stakeholder> {
    return this.http
      .put(API_PATHS.SHARE_TMS.ADD_SHAKEHOLDER, stakeholder)
      .pipe(
        map((response: Stakeholder) => {
          return response;
        })
      );
  }

  deleteStakeholder(deleteStakeholderPayload: DeleteStakeholderPayload): Observable<Stakeholder> {
    return this.http.request('delete', API_PATHS.SHARE_TMS.DELETE_SHAKEHOLDER, { body: deleteStakeholderPayload })
      .pipe(
        map((response: Stakeholder) => {
          console.log(response)
          return response;
        })
      );
  }

  blockStakeholder(blockStakeholderPayload: BlockStakeholderPayload): Observable<Stakeholder> {
    return this.http
      .put(API_PATHS.SHARE_TMS.BLOCK_SHAKEHOLDER, blockStakeholderPayload)
      .pipe(
        map((response: Stakeholder) => {
          return response;
        })
      );
  }

  getAllStakeholders(owner: string): Observable<Stakeholder[]> {
    return this.http
      .get(API_PATHS.SHARE_TMS.GET_ALL_STAKEHOLDERS.replace(':owner', owner))
      .pipe(
        map((response: Stakeholder[]) => {
          return response;
        }),
        shareReplay(1)
      );
  }
}
