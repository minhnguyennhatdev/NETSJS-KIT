import config from '@configs/configuration';
import { INestApplication } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const kafkaConsumer = async (app: INestApplication) => {
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: config.KAFKA.CLIENT_ID,
        brokers: config.KAFKA.BROKERS,
      },
      consumer: {
        groupId: config.KAFKA.GROUP_ID,
      },
    },
  });
  await app.startAllMicroservices();
};
