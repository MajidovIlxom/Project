import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT
  app.use(cookieParser())
  app.setGlobalPrefix("api")
  
  const config = new DocumentBuilder()
  .setTitle('Fermer Project')
  .setDescription('REST API Documentation')
  .setVersion('10.1.9')
  .addTag('Nestjs, MongoDB')
  .build();
  
  const documet = SwaggerModule.createDocument(app, config);
  app.useGlobalPipes(new ValidationPipe())
  SwaggerModule.setup('/api/docs', app, documet);
  
  await app.listen(port,()=> {
    console.log(`MongoDB server ${port}-inchi portda ishga tushdi`);
  });
}
bootstrap();
