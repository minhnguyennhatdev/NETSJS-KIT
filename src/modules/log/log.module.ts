import { LogController } from '@modules/log/log.controller';
import { LogService } from '@modules/log/log.service';
import { ElasticModule } from '@databases/elasticsearch/elasticsearch.module';
import { Module } from '@nestjs/common';
import { KafkaPublisherModule } from '@queues/kafka/kafka.publisher';

@Module({
  imports: [ElasticModule, KafkaPublisherModule],
  providers: [LogService],
  controllers: [LogController],
})
export class LogModule {}
