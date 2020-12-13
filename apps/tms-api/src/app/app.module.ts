import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ShareModule } from './share/share.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION_URL),
    UsersModule,
    ShareModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
