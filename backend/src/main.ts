import { TransformResponseInterceptor } from '@common/interceptor/transform-response.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalInterceptors(new TransformResponseInterceptor());
  await app.listen(configService.get<number>('APP_PORT'));
}
bootstrap();
