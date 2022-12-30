import config from '@configs/configuration';
import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: config.REDIS.HOST,
      port: config.REDIS.PORT,
      ttl: config.REDIS.EXPIRE_TIME,
      isGlobal: true,
    }),
  ],
  exports: [CacheModule],
})
export class RedisModule {}
