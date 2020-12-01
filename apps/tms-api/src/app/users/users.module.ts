import { HttpModule, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/schemas/user.schema';
import { UserService } from './services/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    HttpModule,
  ],
  controllers: [UsersController],
  providers: [UserService],
  exports: [],
})
export class UsersModule {}
