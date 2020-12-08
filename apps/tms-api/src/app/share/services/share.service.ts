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

  async getAllStakeHolders(username: string) {
    if (!username) return { message: 'Invalid username.', status: 'failure' };
    try {
      const owner = await this.shareTMS.findOne({ owner: username }).exec();
      return owner.stakeholders;
    } catch (error) {
      return {
        message: error,
        status: 'failure',
      };
    }
  }

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

  async blockStakeHolder(
    username: string,
    mobileNumber: string,
    isBlocked: boolean
  ) {
    if (!username) return { message: 'Invalid Username', status: 'failure' };
    if (!mobileNumber)
      return { message: 'Invalid Mobile Number', status: 'failure' };

    try {
      const owner = await this.shareTMS.findOne({ owner: username }).exec();
      if (!owner) return { message: 'User does not exist', status: 'failure' };

      if (!owner.stakeholders.length)
        return {
          message: 'User does not have any stakeholder.',
          status: 'failure',
        };

      if (
        _.find(owner.stakeholders, {
          mobileNumber: mobileNumber,
        })
      ) {
        owner.stakeholders = _.map(owner.stakeholders, (stakeholder) => {
          if (stakeholder.mobileNumber === mobileNumber)
            stakeholder.isBlocked = !!isBlocked;

          return stakeholder;
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
        return {
          message: 'Stakeholder does not exist.',
          status: 'failure',
        };
      }
    } catch (error) {
      return {
        message: error,
        status: 'failure',
      };
    }
  }

  async deleteStakeHolder(username: string, mobileNumber: string) {
    if (!username) return { message: 'Invalid Username', status: 'failure' };
    if (!mobileNumber)
      return { message: 'Invalid Mobile Number', status: 'failure' };

    try {
      const owner = await this.shareTMS.findOne({ owner: username }).exec();
      if (!owner.stakeholders.length)
        return {
          message: 'User does not have any stakeholder.',
          status: 'failure',
        };
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
