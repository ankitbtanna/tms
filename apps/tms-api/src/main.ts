/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as mongoose from 'mongoose';
import * as morgan from 'morgan';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.use(morgan('dev'));
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  const port = process.env.PORT || 3000;

  const options = new DocumentBuilder()
    .setTitle('E-Bharat: Tender Management System')
    .setDescription('E-Bharat: TMS')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('tms')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
  process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
  });
}

bootstrap();
