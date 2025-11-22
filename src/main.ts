import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Logger, ValidationPipe } from '@nestjs/common';
import { envVars } from './config/envs.validator';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Habilitamos las validaciones globales
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }));


  await app.listen(envVars.PORT, envVars.HOST);

  Logger.log(`Servidor ejecutándose en: http://${envVars.HOST}:${envVars.PORT}`);
}

bootstrap();
