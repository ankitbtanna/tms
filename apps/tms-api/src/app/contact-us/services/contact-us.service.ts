import { ContactUs, ContactUsDocument } from '../models/contact-us.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ContactUsQuery } from '../models/contact-us.model';

@Injectable()
export class ContactUsService {
    constructor(
        @InjectModel(ContactUs.name) private contactUs: Model<ContactUsDocument>
    ) { }

    async createQuery(query: ContactUsQuery): Promise<ContactUsQuery[] | { [key: string]: string }> {
        try {
            const allQueries = await this.contactUs.find().exec();
            query.caseId = allQueries.length + 1;
            const newQuery = await this.contactUs(query);
            const createdQuery = await newQuery.save();
            return createdQuery;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: JSON.stringify(error),
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
