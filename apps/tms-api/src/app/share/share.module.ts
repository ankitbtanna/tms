import { HttpModule, Module } from '@nestjs/common';
import { ShareTMS, ShareTMSSchema } from './models/share-tms.schema';

import { MongooseModule } from '@nestjs/mongoose';
import { ShareController } from './share/share.controller';
import { ShareService } from './services/share.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ShareTMS.name, schema: ShareTMSSchema }
    ]),
    HttpModule
  ],
  controllers: [ShareController],
  providers: [ShareService],
  exports: [
    MongooseModule.forFeature([
      { name: ShareTMS.name, schema: ShareTMSSchema }
    ])
  ]
})
export class ShareModule {}
