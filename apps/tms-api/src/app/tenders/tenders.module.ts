import { HttpModule, Module } from '@nestjs/common';
import { Tender, TendersSchema } from './models/tenders.schema';

import { MongooseModule } from '@nestjs/mongoose';
import { TenderService } from './services/tender.service';
import { TendersController } from './tenders/tenders.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Tender.name, schema: TendersSchema }
    ]),
    HttpModule
  ],
  controllers: [TendersController],
  providers: [TenderService],
  exports: [
    MongooseModule.forFeature([
      { name: Tender.name, schema: TendersSchema }
    ])
  ]
})
export class TendersModule {}
