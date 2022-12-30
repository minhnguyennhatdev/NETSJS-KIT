import microserviceConfig from '@configs/microservice.config';
import config from '@configs/configuration';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import { SuccessInterceptor } from '@commons/interceptors/success-response.intercepter';
import origin from '@configs/origin.config';

const appConfig = async (app: INestApplication) => {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.use(helmet());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.useGlobalInterceptors(new SuccessInterceptor());
  app.use(cookieParser());
  app.enableCors({
    origin,
    credentials: true,
  });
  app.use(compression());
  app.setGlobalPrefix(config.PREFIX ?? 'api/v1');

  // await microserviceConfig(app);
};

export default appConfig;
