import { HttpModule, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/schemas/user.schema';
import { UserService } from './services/users.service';
import { AuthModule } from '../auth/auth.module';
import { TokenService } from '../auth/services/token.service';
import { ShareModule } from '../share/share.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    HttpModule,
    AuthModule,
    ShareModule,
  ],
  controllers: [UsersController],
  providers: [UserService, TokenService],
  exports: [],
})
export class UsersModule {}
