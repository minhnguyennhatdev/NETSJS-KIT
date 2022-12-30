import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '@app';
import { NestFactory } from '@nestjs/core';
import appConfig from '@configs/app.config';
import { LoggerService } from '@commons/logger/logger.service';
import config from '@configs/configuration';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  await appConfig(app);

  await app.listen(process.env.PORT).then(async () => {
    LoggerService.log(
      '🚀 Listenning on ' + (await app.getUrl()) + `/${config.PREFIX}`,
      `Server Started Successfully`,
    );
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
