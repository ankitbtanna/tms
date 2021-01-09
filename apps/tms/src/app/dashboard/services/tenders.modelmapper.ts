/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { TenderGridModel } from '../models/tender-grid.model';
import { TenderModel } from '../models/tender.model';

@Injectable({
  providedIn: 'root'
})
export class TendersModelMapper {
  getTenderDataForGrid(tenders: TenderModel[]): TenderGridModel[] {
    return tenders.map((tender: TenderModel) => ({
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
      userKeyName: tender.userKeyName || '--',
      userLoginId: tender.userLoginId || '--',
      userPassword: tender.userPassword || '--',
      userWebsite: tender.userWebsite || '--',
      owner: tender.properties.owner,
      createdDate: tender.properties.createdDate,
      document: tender.properties.document,
      isDeleted: tender.properties.isDeleted,
      isComplete: tender.properties.isComplete,
      isNotFilled: tender.properties.isNotFilled
    }));
  }
}