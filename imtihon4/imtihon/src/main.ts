import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import *as cookieParser from 'cookie-parser';
import *as cors from 'cors'
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3000;
    app.use(cors());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix("api")

    const config = new DocumentBuilder()
    .setTitle('Imtihom (Draft for term payment)')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('Nestjs, postgres, Sequielize')
    .build();

    const documet = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, documet);


    app.use(cookieParser())
    await app.listen(PORT, ()=>{
      console.log(`Server ${PORT}-inchi portga ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();


