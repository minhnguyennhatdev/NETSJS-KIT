import config from '@configs/configuration';
import Route from '@configs/route.config';
import { BulkRequestDTO } from '@modules/log/dto/bulk-request.dto';
import { LogService } from '@modules/log/log.service';
import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import kafkaConfig from '@queues/kafka/kafka.config';

@Controller(Route.LOG)
export class LogController {
  constructor(
    @Inject(config.KAFKA.SERVICE_NAME)
    private readonly client: ClientKafka,
    private readonly logService: LogService,
  ) {}

  async onModuleInit() {
    this.client.subscribeToResponseOf(kafkaConfig.TOPICS.LOG);
    await this.client.connect();
  }

  @MessagePattern(kafkaConfig.TOPICS.LOG)
  async logFromQueue(@Payload() message: BulkRequestDTO) {
    return this.logService.bulkFromQueue(message);
  }
}
