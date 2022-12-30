import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: process.env.PORT ?? 3001,
  PREFIX: process.env.PREFIX ?? 'api/v1',
  JWT_SECRET: process.env.JWT_SECRET ?? '123123',
  APP_THROTTLE: {
    TTL: Number(process.env.APP_THROTTLE_TTL) ?? 60,
    LIMIT: Number(process.env.APP_THROTTLE_LIMIT) ?? 100,
  },
  KAFKA: {
    BROKERS: [process.env.KAFKA_BROKER ?? 'localhost:9092'],
    SERVICE_NAME: process.env.KAFKA_SERVICE_NAME ?? 'LOG_SERVICE',
    CLIENT_ID: process.env.KAFKA_CLIENT_ID ?? 'log-client',
    GROUP_ID: process.env.KAFKA_GROUP_ID ?? 'log-consumer',
  },
  REDIS: {
    HOST: process.env.REDIS_HOST ?? 'http:localhost',
    PORT: process.env.REDIS_PORT ?? '6379',
    EXPIRE_TIME: parseInt(process.env.REDIS_EXPIRE_TIME) ?? 360,
  },
  MONGODB: {
    URI: process.env.MONGODB_URI ?? 'mongodb://localhost:27017/demo',
  },
  ELASTICSEARCH: {
    NODE: process.env.ELASTICSEARCH_NODE ?? 'http://localhost:9200',
  },
};

export default config;
