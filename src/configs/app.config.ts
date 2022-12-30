import microserviceConfig from '@configs/microservice.config';
import config from '@configs/configuration';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import { SuccessInterceptor } from '@commons/interceptors/success-response.intercepter';
import origin from '@configs/origin.config';
import { NestExpressApplication } from '@nestjs/platform-express';

const appConfig = async (app: NestExpressApplication) => {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.use(helmet());
  app.set('trust proxy', 1);
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  app.useGlobalInterceptors(new SuccessInterceptor());
  app.use(cookieParser());
  app.enableCors({
    origin,
    credentials: true,
  });
  app.use(compression());
  app.setGlobalPrefix(config.PREFIX ?? 'api/v1');
  app.enableShutdownHooks();

  // await microserviceConfig(app);
};

export default appConfig;
