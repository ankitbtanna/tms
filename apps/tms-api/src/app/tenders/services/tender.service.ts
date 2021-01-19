import { Tender, TendersDocument } from '../models/tenders.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TenderModel } from '../models/tender.model';

@Injectable()
export class TenderService {
  constructor(
    @InjectModel(Tender.name) private tenders: Model<TendersDocument>
  ) { }

  async getAllTenders(): Promise<TenderModel[] | { [key: string]: string }> {
    try {
      const tenders = await this.tenders.find().exec();
      return tenders;
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // eslint-disable-next-line max-len
  async getAllTendersByUserName(username: string): Promise<TenderModel[] | { [key: string]: string }> {
    try {
      if (!username) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid username.',
        }, HttpStatus.BAD_REQUEST);
      }
      const allTendersByUsername = await this.tenders.find({
        'properties.owner': username
      }).exec();
      return allTendersByUsername;
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getTendersByUserName(username: string): Promise<TenderModel[] | { [key: string]: string }> {
    try {
      if (!username) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid username.',
        }, HttpStatus.BAD_REQUEST);
      }
      const tendersByUsername = await this.tenders.find({
        'properties.owner': username,
        'properties.isDeleted': false
      }).exec();
      return tendersByUsername;
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createTender(tender: TenderModel): Promise<TenderModel | { [key: string]: string }> {
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
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // eslint-disable-next-line max-len
  async updateTender(tender: TenderModel, tenderId: string): Promise<TenderModel | { [key: string]: string }> {
    try {
      if (!tenderId) return { message: 'Invalid tender id.', status: 'failure' };
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

      const currentTender: TenderModel = tender;
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
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteTender(tenderId: string): Promise<TenderModel | { [key: string]: string }> {
    try {
      if (!tenderId) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid tender id.',
        }, HttpStatus.BAD_REQUEST);
      }
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
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async retrieveTender(tenderId: string): Promise<TenderModel | { [key: string]: string }> {
    try {
      if (!tenderId) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid tender id.',
        }, HttpStatus.BAD_REQUEST);
      }
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
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteTenderPermanently(tenderId: string): Promise<unknown | { [key: string]: string }> {
    try {
      if (!tenderId) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid tender id.',
        }, HttpStatus.BAD_REQUEST);
      }
      await this.tenders.deleteOne({ _id: tenderId });
      return true;
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  checkAndThrowException(tenderId: string, tender: TenderModel) {
    if (!tenderId) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender id.',
      }, HttpStatus.BAD_REQUEST);
    }

    if (!tender) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender details.',
      }, HttpStatus.BAD_REQUEST);
    }

    if (!tender.name) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender name.',
      }, HttpStatus.BAD_REQUEST);
    }

    if (!tender.amount) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender amount.',
      }, HttpStatus.BAD_REQUEST);
    }
    if (!tender.fee) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender fees.',
      }, HttpStatus.BAD_REQUEST);
    }
    if (!tender.emd) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender emd.',
      }, HttpStatus.BAD_REQUEST);
    }
    if (!tender.bidDueDate) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender Bid Due Date.',
      }, HttpStatus.BAD_REQUEST);
    }
    if (!tender.bidCutOffTime) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender Bid Cut Off Time.',
      }, HttpStatus.BAD_REQUEST);
    }
    if (!tender.referenceNumber) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender Reference Number.',
      }, HttpStatus.BAD_REQUEST);
    }
    if (!tender.tenderId) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender ID.',
      }, HttpStatus.BAD_REQUEST);
    }
    if (!tender.publishedDate) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender Published Date.',
      }, HttpStatus.BAD_REQUEST);
    }
    if (!tender.properties.owner) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender owner.',
      }, HttpStatus.BAD_REQUEST);
    }
    if (!tender.properties.createdDate) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Invalid tender Create Date.',
      }, HttpStatus.BAD_REQUEST);
    }
  }
}
