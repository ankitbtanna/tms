import * as _ from 'lodash';
import { ForgotPassword, ForgotPasswordDocument } from '../models/forgot-password.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ShareTMS as StakeholderInfo } from '../models/forgot-password.model';
import { v4 as uuidv4 } from 'uuid';
const nodemailer = require("nodemailer");

@Injectable()
export class ForgotPasswordService {
    constructor(
        @InjectModel(ForgotPassword.name) private forgotPassword: Model<ForgotPasswordDocument>
    ) { }

    async generateForgotPasswordLink(email: string) {
        const token = uuidv4();
        const currentDate = (new Date()).getTime();
        const owner = await this.forgotPassword.findOne({ owner: email }).exec()
        if (!owner) {
            const query = await this.forgotPassword({
                owner: email,
                token: token,
                date: currentDate
            });
            await query.save();
        } else {
            const owner = await this.forgotPassword.findOne({ owner: email }).exec()
            owner.token = token;
            owner.date = currentDate;
            await this.forgotPassword.findOneAndUpdate({ owner: email }, owner, { upsert: true }).exec();
        }
        const forgotPasswordUrl = `http://localhost:4200/reset-password?email=${email}&token=${token}`;
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "ebharat.tms@gmail.com",
                pass: "TMSPortal@123",
            },
        });
        let info = await transporter.sendMail({
            from: '"Ebharat TMS" <ebharat.tms@gmail.com>', // sender address
            to: "ankittanna@hotmail.com", // list of receivers
            subject: "TMS - Reset Password", // Subject line
            html: `Hi User,<p>Please click on below link for resetting your passworrd. If you are unable to reset your password, please contact us at ebharat.tms@gmail.com!</p><p><a href='${forgotPasswordUrl}' target='_blank'>Click Here!</a></p><p>Thanks - Team E-bharat TMS.</p>`
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    async verifyForgotPasswordToken(email: string, token: string) {
        const owner = await this.forgotPassword.findOne({ owner: email }).exec();

        if (!owner) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Invalid reset password link.',
            }, HttpStatus.BAD_REQUEST);
        }

        const currentDate = (new Date()).getTime();
        const tokenDate = Number(owner.date);
        if (currentDate - tokenDate > 1800000) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Password link expired. Please try again.',
            }, HttpStatus.BAD_REQUEST);
        }

        if (owner.token === token) {
            return owner;
        } else {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Invalid reset password link.',
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async verifyMobileNumber(number: string) {
        if (!number) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Invalid number.',
            }, HttpStatus.NOT_FOUND);
        }
        try {
            const sharingOwners = [];
            const owners = await this.forgotPassword.find().exec();
            owners.forEach(owner => {
                if (owner.stakeholders.length > 0) {
                    owner.stakeholders.forEach(stakeholder => {
                        if (stakeholder.mobileNumber === number) {
                            sharingOwners.push(owner.owner)
                        }
                    });
                }
            });
            return sharingOwners;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: JSON.stringify(error),
            }, HttpStatus.NOT_FOUND);
        }
    }
}
