import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShareModule } from './share/share.module';
import { TendersModule } from './tenders/tenders.module';
import { UsersModule } from './users/users.module';
import { HttpExceptionFilter } from './exception/http-exception.filter';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION_URL),
    UsersModule,
    ShareModule,
    TendersModule
  ],
  controllers: [AppController],
  providers: [AppService, HttpExceptionFilter]
})
export class AppModule { }
