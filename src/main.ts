import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
      .setTitle('Nest API')
      .setDescription('Nest | TS | PostgreSQL | Docker practice')
      .setVersion('1.0.0')
      .addTag('VADOZ')
      .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(process.env.PORT ?? 3000);


}


bootstrap();
