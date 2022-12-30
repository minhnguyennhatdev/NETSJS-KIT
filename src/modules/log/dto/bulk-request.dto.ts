import { IsString } from 'class-validator';

export class BulkRequestDTO {
  @IsString()
  index: string;

  data: any;
}
