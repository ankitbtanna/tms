import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ShareTMS, ShareTMSDocument } from '../models/share-tms.schema';
import { ShareTMS as StakeholderInfo } from '../models/share-tms.model';
import * as _ from 'lodash';

@Injectable()
export class ShareService {
  constructor(
    @InjectModel(ShareTMS.name) private shareTMS: Model<ShareTMSDocument>
  ) {}

  getAllStakeHolders(username: string) {}

  async addStakeHolder(stakeholderDTO: StakeholderInfo) {
    if (!stakeholderDTO.owner)
      return { message: 'Invalid username.', status: 'failure' };

    try {
      const owner = await this.shareTMS
        .findOne({ owner: stakeholderDTO.owner })
        .exec();

      if (
        _.find(owner.stakeholders, {
          mobileNumber: stakeholderDTO.stakeholders[0].mobileNumber,
        })
      ) {
        return { message: 'Stakeholder already present.', status: 'failure' };
      }
      owner.stakeholders.push(stakeholderDTO.stakeholders[0]);
      const modifiedOwner = this.shareTMS(owner);
      const result = await modifiedOwner.save();
      return result;
    } catch (error) {
      return {
        message: error,
        status: 'failure',
      };
    }
  }

  blockStakeHolder(
    username: string,
    mobileNumber: string,
    isBlocked: boolean
  ) {}

  async deleteStakeHolder(username: string, mobileNumber: string) {
    if (!username) return { message: 'Invalid Username', status: 'failure' };
    if (!mobileNumber)
      return { message: 'Invalid Mobile Number', status: 'failure' };

    try {
      const owner = await this.shareTMS.findOne({ owner: username }).exec();
      if (
        _.find(owner.stakeholders, {
          mobileNumber: mobileNumber,
        })
      ) {
        _.remove(owner.stakeholders, {
          mobileNumber: mobileNumber,
        });
        await this.shareTMS
          .findOneAndUpdate(
            {
              owner: username,
            },
            owner,
            { upsert: true }
          )
          .exec();
        const modifiedOwner = await this.shareTMS
          .findOne({ owner: username })
          .exec();
        return modifiedOwner;
      } else {
        return { message: 'Stakeholder does not exist.', status: 'failure' };
      }
    } catch (error) {
      return {
        message: error,
        status: 'failure',
      };
    }
  }
}
