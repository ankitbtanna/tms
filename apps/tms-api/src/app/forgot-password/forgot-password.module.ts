import {
  HttpModule,
  Module
} from '@nestjs/common';
import { ForgotPassword, ForgotPasswordSchema } from './models/forgot-password.schema';

import { MongooseModule } from '@nestjs/mongoose';
import { ForgotPasswordService } from './services/forgot-password.services';
import { ForgotPasswordController } from './forgot-password/forgot-password.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ForgotPassword.name, schema: ForgotPasswordSchema }
    ]),
    HttpModule
  ],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService],
  exports: [
    MongooseModule.forFeature([
      { name: ForgotPassword.name, schema: ForgotPasswordSchema }
    ])
  ]
})
export class ForgotPasswordModule { }
