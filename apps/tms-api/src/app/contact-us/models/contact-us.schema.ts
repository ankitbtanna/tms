// eslint-disable-next-line max-classes-per-file
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema()
export class ContactUs extends Document {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    caseId: number;

    @Prop({ required: true })
    subject: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    isOpen: boolean;

    @Prop({ required: true })
    date: string;
}
export type ContactUsDocument = ContactUs & Document;
export const ContactUsSchema = SchemaFactory.createForClass(ContactUs);
