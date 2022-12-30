import config from '@configs/configuration';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(config.MONGODB.URI)],
})
export class MongoDBModule {}
