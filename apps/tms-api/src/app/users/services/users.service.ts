import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserAuthentication } from '../models/interfaces/user-authentication.model';
import { User } from '../models/interfaces/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async registerUser(user: User) {
    const newUser = this.userModel(user);
    try {
      const result = await newUser.save();
      return {
        _id: result._id,
        username: result.username,
        status: result._id ? 'success' : 'failure',
      };
    } catch (error) {
      return {
        message: error,
        status: 'failure',
      };
    }
  }

  async checkUserRegistration(username: string) {
    const result = await this.userModel.find({
      username: username.toLowerCase(),
    });
    if (result.length) {
      return {
        message: 'User already exists. Chose a different username.',
        status: 'failure',
      };
    } else {
      return {
        message: 'User does not exist. Go ahead with registeration.',
        status: 'success',
      };
    }
  }

  async login(userAuthentication: UserAuthentication) {
    try {
      const user = await this.userModel.findOne({
        username: userAuthentication.username.toLowerCase(),
      });
      if (user) {
        const isPasswordMatching = await bcrypt.compare(
          userAuthentication.password,
          user.password
        );
        if (isPasswordMatching) {
          return {
            username: user.username,
            accessToken: '',
            refreshToken: '',
            status: 'success',
          };
        } else {
          return {
            message: 'Authentication failed!',
            status: 'failure',
          };
        }
      } else {
        // throw error - user does not exist
        return {
          message: 'User does not exist.',
          status: 'failure',
        };
      }
    } catch (error) {
      return {
        message: 'User does not exist.',
        status: 'failure',
      };
    }
  }

  async refreshToken() {}

  async logout() {}
}
