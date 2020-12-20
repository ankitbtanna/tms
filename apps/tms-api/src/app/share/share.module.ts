import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common';
import { ShareTMS, ShareTMSSchema } from './models/share-tms.schema';

import { AuthTokenMiddleware } from '../auth/middlewares/auth-token-middleware.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ShareController } from './share/share.controller';
import { ShareService } from './services/share.service';
import { TokenService } from '../auth/services/token.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ShareTMS.name, schema: ShareTMSSchema }
    ]),
    HttpModule
  ],
  controllers: [ShareController],
  providers: [ShareService, TokenService],
  exports: [
    MongooseModule.forFeature([
      { name: ShareTMS.name, schema: ShareTMSSchema }
    ])
  ]
})
export class ShareModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AuthTokenMiddleware).forRoutes({ path: 'share/*', method: RequestMethod.ALL });
  }
}
