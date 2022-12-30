import config from '@configs/configuration';
import { LogModule } from '@modules/log/log.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

const RootModule = [
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  ThrottlerModule.forRoot({
    ttl: config.APP_THROTTLE.TTL,
    limit: config.APP_THROTTLE.LIMIT,
  }),
  LogModule,
];

export default RootModule;
