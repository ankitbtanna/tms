import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/interfaces/user.model';

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
}
