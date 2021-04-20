/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */
import * as bcrypt from 'bcrypt';
import {
  ShareTMS,
  ShareTMSDocument
} from '../../share/models/share-tms.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TokenService } from '../../auth/services/token.service';
import { User } from '../models/interfaces/user.model';
import { UserAuthentication } from '../models/interfaces/user-authentication.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel(ShareTMS.name) private shareTMS: Model<ShareTMSDocument>,
    private tokenService: TokenService
  ) { }

  async getUser(username: string) {
    const result = await this.userModel.find({
      username: username.toLowerCase()
    });
    if (!result.length) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'User does not exist. Please enter a valid email id.',
      }, HttpStatus.BAD_REQUEST);
    }
    delete result[0].password;
    return result;
  }

  async getUserSubscriptionDetails(username: string) {
    const result = await this.userModel.find({
      username: username.toLowerCase()
    });
    if (!result.length) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'User does not exist. Please enter a valid email id.',
      }, HttpStatus.BAD_REQUEST);
    }

    return {
      isPremiumMember: result[0].isPremiumMember,
      subscriptionEndDate: result[0].subscriptionEndDate,
      subscriptionStartDate: result[0].subscriptionStartDate,
      registrationDate: result[0].subscriptionStartDate,
      premiumMembershipReferenceId: result[0].premiumMembershipReferenceId
    };
  }

  async updateUser(premiumMembershipReferenceId: string, username: string) {
    try {
      const users = await this.userModel
        .find(
          {
            username: username
          }
        )
        .exec();
      users[0].premiumMembershipReferenceId = premiumMembershipReferenceId;
      await this.userModel.findOneAndUpdate({
        username: username
      },
        users[0],
        { upsert: true }
      );
      const modifiedUsers = await this.userModel.find({ username: username }).exec();
      return modifiedUsers[0];
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateUserPassword(username: string, password: string) {
    if (!password || !username) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Invalid username or password.',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    try {
      const users = await this.userModel
        .find(
          {
            username: username
          }
        )
        .exec();
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      users[0].password = hashedPassword;
      await this.userModel.findOneAndUpdate({
        username: username
      },
        users[0],
        { upsert: true }
      );
      const modifiedUsers = await this.userModel.find({ username: username }).exec();
      delete modifiedUsers.password;
      return modifiedUsers[0];
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async registerUser(user: User) {
    const newUser = this.userModel(user);
    try {
      const result = await newUser.save();
      const createShareTMSEntry = new this.shareTMS({
        owner: result.username,
        stakeholders: []
      });
      await createShareTMSEntry.save();
      return {
        _id: result._id,
        username: result.username,
        status: result._id ? 'success' : 'failure'
      };
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async checkUserRegistration(username: string) {
    const result = await this.userModel.find({
      username: username.toLowerCase()
    });
    if (result.length) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'User already exists. Chose a different username.',
      }, HttpStatus.BAD_REQUEST);
    }
    return {
      message: 'User does not exist. Go ahead with registeration.',
      status: 'success'
    };
  }

  async login(userAuthentication: UserAuthentication) {
    try {
      const user = await this.userModel.findOne({
        username: userAuthentication.username.toLowerCase()
      });
      if (user) {
        const isPasswordMatching = await bcrypt.compare(
          userAuthentication.password,
          user.password
        );
        if (isPasswordMatching) {
          const accessToken = await this.tokenService.signAccessToken(
            user.username
          );
          return {
            username: user.username,
            accessToken,
            refreshToken: '',
            status: 'success'
          };
        }
        throw new HttpException({
          status: HttpStatus.UNAUTHORIZED,
          error: 'Authentication failed!',
        }, HttpStatus.UNAUTHORIZED);
      }
      // throw error - user does not exist
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'User does not exist.',
      }, HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: JSON.stringify(error),
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async refreshToken() { }

  async logout() { }
}
