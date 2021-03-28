import {
  HttpModule,
  Module
} from '@nestjs/common';
import { ShareTMS, ShareTMSSchema } from './models/share-tms.schema';

import { MongooseModule } from '@nestjs/mongoose';
import { ShareAppController } from './share-app/share-app.controller';
import { ShareAppService } from './services/share-app.services';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ShareTMS.name, schema: ShareTMSSchema }
    ]),
    HttpModule
  ],
  controllers: [ShareAppController],
  providers: [ShareAppService],
  exports: [
    MongooseModule.forFeature([
      { name: ShareTMS.name, schema: ShareTMSSchema }
    ])
  ]
})
export class ShareAppModule { }
