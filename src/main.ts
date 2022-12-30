import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '@app';
import { NestFactory } from '@nestjs/core';
import appConfig from '@configs/app.config';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  await appConfig(app);

  await app.listen(process.env.PORT).then(async () => {
    console.log('Server is listening on:', await app.getUrl());
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
