// eslint-disable-next-line max-classes-per-file
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export class TenderProperties extends Document {
    @Prop({ required: true })
    owner: string;

    @Prop({ required: true })
    createdDate: string;

    @Prop({ required: false, default: '' })
    document: string;

    @Prop({ required: false, default: false })
    isDeleted: boolean;

    @Prop({ required: false, default: false })
    isComplete: boolean;

    @Prop({ required: false, default: false })
    isNotFilled: boolean;
}

@Schema()
export class Tenders extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    amount: string;

    @Prop({ required: true })
    fee: string;

    @Prop({ required: true })
    emd: string;

    @Prop({ required: true })
    referenceNumber: string;

    @Prop({ required: true })
    tenderId: string;

    @Prop({ required: true })
    publishedDate: string;

    @Prop({ required: true })
    bidDueDate: string;

    @Prop({ required: true })
    bidCutOffTime: string;

    @Prop({ required: false })
    userKeyName: string;

    @Prop({ required: false })
    userLoginId: string;

    @Prop({ required: false })
    userPassword: string;

    @Prop({ required: false })
    userWebsite: string;

    @Prop({
      type: {
        owner: String,
        createdDate: String,
        document: String,
        isDeleted: Boolean,
        isComplete: Boolean,
        isNotFilled: Boolean
      },
      required: true,
      default: {
        owner: 'unknown',
        createdDate: 'Thu Jan 01 1970 00:00:00 GMT+0530 (IST)'
      }
    })
    tenderProperties: TenderProperties;
}
export type TendersDocument = Tenders & Document;
export const TendersSchema = SchemaFactory.createForClass(Tenders);
