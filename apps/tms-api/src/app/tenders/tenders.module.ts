import { Module } from '@nestjs/common';
import { TendersController } from './tenders/tenders.controller';

@Module({
  controllers: [TendersController]
})
export class TendersModule {}
