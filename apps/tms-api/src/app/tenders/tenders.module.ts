import { HttpModule, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { Tender, TendersSchema } from './models/tenders.schema';

import { MongooseModule } from '@nestjs/mongoose';
import { TenderService } from './services/tender.service';
import { TendersController } from './tenders/tenders.controller';
import { AuthTokenMiddleware } from '../auth/middlewares/auth-token-middleware.service';
import { TokenService } from '../auth/services/token.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Tender.name, schema: TendersSchema }
    ]),
    HttpModule
  ],
  controllers: [TendersController],
  providers: [TenderService, TokenService],
  exports: [
    MongooseModule.forFeature([
      { name: Tender.name, schema: TendersSchema }
    ])
  ]
})
export class TendersModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AuthTokenMiddleware).forRoutes({ path: 'tenders/*', method: RequestMethod.ALL });
  }
}
