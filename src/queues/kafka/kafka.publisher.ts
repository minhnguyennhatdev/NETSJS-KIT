import config from '@configs/configuration';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: config.KAFKA.SERVICE_NAME,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: config.KAFKA.CLIENT_ID,
            brokers: config.KAFKA.BROKERS,
          },
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class KafkaPublisherModule {}
