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
      publishedDate: new Date(tender.publishedDate),
      bidDueDate: new Date(tender.bidDueDate),
      bidCutOffTime: tender.bidCutOffTime,
      userKeyName: tender.userKeyName || '--',
      userLoginId: tender.userLoginId || '--',
      userPassword: tender.userPassword || '--',
      userWebsite: tender.userWebsite || '--',
      owner: tender.properties.owner,
      createdDate: new Date((new Date(tender.properties.createdDate)).setHours(0, 0, 0, 0)),
      document: tender.properties.document,
      isDeleted: tender.properties.isDeleted,
      isComplete: tender.properties.isComplete,
      isActive: !tender.properties.isDeleted && !tender.properties.isComplete && !tender.properties.isNotFilled,
      isNotFilled: tender.properties.isNotFilled
    }));
  }

  getTenderDataForEdit(tenders: TenderGridModel[]): TenderModel[] {
    return tenders.map((tender: TenderGridModel) => {
      return {
        _id: tender._id,
        name: tender.name,
        amount: tender.amount,
        fee: tender.fee,
        emd: tender.emd,
        referenceNumber: tender.referenceNumber,
        tenderId: tender.tenderId,
        publishedDate: (new Date()).toDateString(),
        bidDueDate: (new Date()).toDateString(),
        bidCutOffTime: tender.bidCutOffTime,
        userKeyName: tender.userKeyName,
        userLoginId: tender.userLoginId,
        userPassword: tender.userPassword,
        userWebsite: tender.userWebsite,
        properties: {
          owner: tender.owner,
          createdDate: (new Date()).toDateString(),
          document: tender.document,
          isDeleted: tender.isDeleted,
          isComplete: tender.isComplete,
          isNotFilled: tender.isNotFilled
        }
      };
    });
  }
}
