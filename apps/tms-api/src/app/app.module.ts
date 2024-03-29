import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShareModule } from './share/share.module';
import { ShareAppModule } from './share-app/share-app.module';
import { TendersModule } from './tenders/tenders.module';
import { UsersModule } from './users/users.module';
import { HttpExceptionFilter } from './exception/http-exception.filter';
import { TransactionModule } from './transaction/transaction.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION_URL),
    UsersModule,
    ShareModule,
    ShareAppModule,
    ForgotPasswordModule,
    TendersModule,
    TransactionModule,
    ContactUsModule
  ],
  controllers: [AppController],
  providers: [AppService, HttpExceptionFilter]
})
export class AppModule { }
