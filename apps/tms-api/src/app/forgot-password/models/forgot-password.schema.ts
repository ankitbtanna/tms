/* eslint-disable max-classes-per-file */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema()
export class ForgotPassword extends Document {
  @Prop({ required: true, unique: true, lowercase: true })
  owner: string;

  @Prop({ required: true })
  token: string;

  @Prop({ required: true })
  date: string;
}
export type ForgotPasswordDocument = ForgotPassword & Document;
export const ForgotPasswordSchema = SchemaFactory.createForClass(ForgotPassword);
