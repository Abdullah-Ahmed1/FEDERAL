import { Test, TestingModule } from '@nestjs/testing';
import { CateogriesController } from './cateogries.controller';

describe('CateogriesController', () => {
  let controller: CateogriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CateogriesController],
    }).compile();

    controller = module.get<CateogriesController>(CateogriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
