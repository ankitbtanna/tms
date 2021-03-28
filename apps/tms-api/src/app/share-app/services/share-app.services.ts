import * as _ from 'lodash';
import { ShareTMS, ShareTMSDocument } from '../models/share-tms.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ShareTMS as StakeholderInfo } from '../models/share-tms.model';

@Injectable()
export class ShareAppService {
    constructor(
        @InjectModel(ShareTMS.name) private shareTMS: Model<ShareTMSDocument>
    ) { }

    async verifyMobileNumber(number: string) {
        if (!number) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Invalid number.',
            }, HttpStatus.NOT_FOUND);
        }
        try {
            const sharingOwners = [];
            const owners = await this.shareTMS.find().exec();
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

    async getAllStakeHolders(username: string) {
        if (!username) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Invalid username.',
            }, HttpStatus.NOT_FOUND);
        }
        try {
            const owner = await this.shareTMS.findOne({ owner: username }).exec();
            return owner.stakeholders;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: JSON.stringify(error),
            }, HttpStatus.NOT_FOUND);
        }
    }

    async addStakeHolder(stakeholderDTO: StakeholderInfo) {
        if (!stakeholderDTO.owner) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Invalid username.',
            }, HttpStatus.NOT_FOUND);
        }

        try {
            const owner = await this.shareTMS
                .findOne({ owner: stakeholderDTO.owner })
                .exec();

            if (
                _.find(owner.stakeholders, {
                    mobileNumber: stakeholderDTO.stakeholders[0].mobileNumber
                })
            ) {
                throw new HttpException({
                    status: HttpStatus.CONFLICT,
                    error: 'Stakeholder already present.',
                }, HttpStatus.CONFLICT);
            }
            owner.stakeholders.push(stakeholderDTO.stakeholders[0]);
            const modifiedOwner = this.shareTMS(owner);
            const result = await modifiedOwner.save();
            return result;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: JSON.stringify(error),
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async blockStakeHolder(
        username: string,
        mobileNumber: string,
        isBlocked: boolean
    ) {
        if (!username) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Invalid username.',
            }, HttpStatus.NOT_FOUND);
        }
        if (!mobileNumber) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Invalid Mobile Number!',
            }, HttpStatus.NOT_FOUND);
        }

        try {
            const owner = await this.shareTMS.findOne({ owner: username }).exec();
            if (!owner) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'User does not exist.',
                }, HttpStatus.NOT_FOUND);
            }

            if (!owner.stakeholders.length) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'User does not have any stakeholder.',
                }, HttpStatus.NOT_FOUND);
            }

            if (
                _.find(owner.stakeholders, {
                    mobileNumber
                })
            ) {
                owner.stakeholders = _.map(owner.stakeholders, (stakeholder) => {
                    if (stakeholder.mobileNumber === mobileNumber) stakeholder.isBlocked = !!isBlocked;

                    return stakeholder;
                });

                await this.shareTMS
                    .findOneAndUpdate(
                        {
                            owner: username
                        },
                        owner,
                        { upsert: true }
                    )
                    .exec();
                const modifiedOwner = await this.shareTMS
                    .findOne({ owner: username })
                    .exec();
                return modifiedOwner;
            }
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Stakeholder does not exist.',
            }, HttpStatus.NOT_FOUND);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: JSON.stringify(error),
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteStakeHolder(username: string, mobileNumber: string) {
        if (!username) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'User does not exist.',
            }, HttpStatus.NOT_FOUND);
        }

        if (!mobileNumber) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Mobile number does not exist.',
            }, HttpStatus.NOT_FOUND);
        }

        try {
            const owner = await this.shareTMS.findOne({ owner: username }).exec();
            if (!owner.stakeholders.length) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'User does not have any stakeholder.',
                }, HttpStatus.NOT_FOUND);
            }
            if (
                _.find(owner.stakeholders, {
                    mobileNumber
                })
            ) {
                _.remove(owner.stakeholders, {
                    mobileNumber
                });
                await this.shareTMS
                    .findOneAndUpdate(
                        {
                            owner: username
                        },
                        owner,
                        { upsert: true }
                    )
                    .exec();
                const modifiedOwner = await this.shareTMS
                    .findOne({ owner: username })
                    .exec();
                return modifiedOwner;
            }
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Stakeholder does not exist.',
            }, HttpStatus.NOT_FOUND);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: JSON.stringify(error),
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
