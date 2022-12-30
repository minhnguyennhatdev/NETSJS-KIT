import { INestApplication } from '@nestjs/common';
import { kafkaConsumer } from '@queues/kafka/kafka.consumer';

const microserviceConfig = async (app: INestApplication) => {
  await kafkaConsumer(app);
};

export default microserviceConfig;
