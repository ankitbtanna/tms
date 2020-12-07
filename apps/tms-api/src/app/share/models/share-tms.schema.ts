import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShareTMSDocument = ShareTMS & Document;

export class Stakeholder extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  mobileNumber: string;

  @Prop({ required: false })
  description: string;

  @Prop({ default: false })
  isBlocked: boolean;
}

@Schema()
export class ShareTMS extends Document {
  @Prop({ required: true, unique: true, lowercase: true })
  owner: string;

  @Prop({
    type: [
      {
        name: String,
        mobileNumber: String,
        description: String,
        isBlocked: Boolean,
      },
    ],
    default: [],
  })
  stakeholders: Stakeholder[];
}

export const ShareTMSSchema = SchemaFactory.createForClass(ShareTMS);
