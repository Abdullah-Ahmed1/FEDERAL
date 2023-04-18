import { Test, TestingModule } from '@nestjs/testing';
import { CateogriesService } from './cateogries.service';

describe('CateogriesService', () => {
  let service: CateogriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CateogriesService],
    }).compile();

    service = module.get<CateogriesService>(CateogriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
