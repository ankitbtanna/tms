import { HttpModule, Module } from '@nestjs/common';
import { Tenders, TendersSchema } from './models/tenders.schema';

import { MongooseModule } from '@nestjs/mongoose';
import { TendersController } from './tenders/tenders.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Tenders.name, schema: TendersSchema }
    ]),
    HttpModule
  ],
  controllers: [TendersController],
  exports: [
    MongooseModule.forFeature([
      { name: Tenders.name, schema: TendersSchema }
    ])
  ]
})
export class TendersModule {}
