import { Payload } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { BulkRequestDTO } from '@modules/log/dto/bulk-request.dto';

@Injectable()
export class LogService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async bulkFromQueue(@Payload() message: BulkRequestDTO) {
    if (typeof message === 'string') {
      message = {
        index: 'unknown_index',
        data: { message },
      };
    }
    const { index, data } = message;
    await this.elasticsearchService.index({
      index,
      document: data,
    });
    return await this.elasticsearchService.indices.refresh({
      index,
    });
  }
}
