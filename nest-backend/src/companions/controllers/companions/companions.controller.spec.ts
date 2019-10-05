import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CompanionsService } from '../../services/companions/companions.service';
import { CompanionsController } from './companions.controller';

const companionModel = {};

describe('Companions Controller', () => {
  let controller: CompanionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanionsController],
      providers: [
        CompanionsService,
        {
          provide: getModelToken('Companion'),
          useValue: companionModel,
        },
      ],
    }).compile();

    controller = module.get<CompanionsController>(CompanionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
