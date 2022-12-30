import config from '@configs/configuration';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import Joi from 'joi';
import validationEnv from '@configs/joi.config';

const RootModule = [
  ConfigModule.forRoot({
    validationSchema: Joi.object({
      validationEnv,
    }),
    isGlobal: true,
  }),
  ThrottlerModule.forRoot({
    ttl: config.APP_THROTTLE.TTL,
    limit: config.APP_THROTTLE.LIMIT,
  }),
];

export default RootModule;
