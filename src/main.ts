import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('BACKEND DIACO')
    .setDescription('SERVICIO DIACO API  MODULO QUEJAS')
    .setVersion('1.0')
    .addTag('Mauro jutzutz 1990-14-12114')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 400);
}
bootstrap();
