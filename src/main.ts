import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000, process.env.HOST ?? '127.0.0.1');

  Logger.log(`Servidor ejecutándose en: http://${process.env.HOST}:${process.env.PORT}`)
}

bootstrap();
