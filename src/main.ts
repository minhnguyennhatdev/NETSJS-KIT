import { AppModule } from '@app';
import { NestFactory } from '@nestjs/core';
import appConfig from '@configs/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await appConfig(app);

  await app.listen(process.env.PORT).then(async () => {
    console.log('Server is listening on:', await app.getUrl());
  });
}
bootstrap();
