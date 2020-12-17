import { Tender, TendersDocument } from '../models/tenders.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TenderModel } from '../models/tender.model';

@Injectable()
export class TenderService {
  constructor(
    @InjectModel(Tender.name) private tenders: Model<TendersDocument>
  ) {}

  async createTender(tender: TenderModel): Promise<TenderModel | {[key: string]: string}> {
    try {
      if (!tender) return { message: 'Invalid tender details.', status: 'failure' };
      if (!tender.name) return { message: 'Invalid tender name.', status: 'failure' };
      if (!tender.amount) return { message: 'Invalid tender amount.', status: 'failure' };
      if (!tender.fee) return { message: 'Invalid tender fee.', status: 'failure' };
      if (!tender.emd) return { message: 'Invalid tender emd.', status: 'failure' };
      if (!tender.bidDueDate) return { message: 'Invalid tender bid due date.', status: 'failure' };
      if (!tender.bidCutOffTime) return { message: 'Invalid tender bid cut off time.', status: 'failure' };
      if (!tender.referenceNumber) return { message: 'Invalid tender reference number.', status: 'failure' };
      if (!tender.tenderId) return { message: 'Invalid tenderId.', status: 'failure' };
      if (!tender.publishedDate) return { message: 'Invalid tender published date.', status: 'failure' };
      if (!tender.properties.owner) return { message: 'Tender owner not provided', status: 'failure' };
      if (!tender.properties.createdDate) return { message: 'Invalid tender create date.', status: 'failure' };

      const newTender = await this.tenders(tender);
      const createdTender = await newTender.save();
      return createdTender;
    } catch (error) {
      return error;
    }
  }

  async deleteTender(tenderId: string): Promise<TenderModel | { [key: string]: string }> {
    try {
      if (!tenderId) return { message: 'Invalid tender id.', status: 'failure' };
      const currentTender: TenderModel = await this.tenders.findOne({ _id: tenderId });
      currentTender.properties.isDeleted = true;
      await this.tenders
        .findOneAndUpdate(
          {
            _id: tenderId
          },
          currentTender,
          { upsert: true }
        )
        .exec();
      const updatedTender: TenderModel = await this.tenders.findOne({ _id: tenderId });
      return updatedTender;
    } catch (error) {
      return error;
    }
  }

  async retrieveTender(tenderId: string): Promise<TenderModel | { [key: string]: string }> {
    try {
      if (!tenderId) return { message: 'Invalid tender id.', status: 'failure' };
      const currentTender: TenderModel = await this.tenders.findOne({ _id: tenderId });
      currentTender.properties.isDeleted = false;
      await this.tenders
        .findOneAndUpdate(
          {
            _id: tenderId
          },
          currentTender,
          { upsert: true }
        )
        .exec();
      const updatedTender: TenderModel = await this.tenders.findOne({ _id: tenderId });
      return updatedTender;
    } catch (error) {
      return error;
    }
  }
}
