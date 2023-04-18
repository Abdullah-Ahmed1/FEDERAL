import { Module } from '@nestjs/common';
import { CateogriesController } from './cateogries.controller';
import { CateogriesService } from './cateogries.service';

@Module({
  controllers: [CateogriesController],
  providers: [CateogriesService]
})
export class CateogriesModule {}
