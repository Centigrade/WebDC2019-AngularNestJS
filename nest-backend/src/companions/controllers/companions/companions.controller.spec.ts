import { Test, TestingModule } from '@nestjs/testing';
import { CompanionsController } from './companions.controller';

describe('Companions Controller', () => {
  let controller: CompanionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanionsController],
    }).compile();

    controller = module.get<CompanionsController>(CompanionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
