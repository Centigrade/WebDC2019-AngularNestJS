import { Test, TestingModule } from '@nestjs/testing';
import { CompanionsService } from './companions.service';

describe('CompanionsService', () => {
  let service: CompanionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanionsService],
    }).compile();

    service = module.get<CompanionsService>(CompanionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
