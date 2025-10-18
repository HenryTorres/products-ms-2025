import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Logger } from '@nestjs/common';
import { envVars } from './config/envs.validator';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envVars.PORT, envVars.HOST);

  Logger.log(`Servidor ejecutándose en: http://${envVars.HOST}:${envVars.PORT}`);
}

bootstrap();
