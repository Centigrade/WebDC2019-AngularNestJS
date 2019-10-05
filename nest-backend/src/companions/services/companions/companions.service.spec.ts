import { CompanionDetails } from '@interfaces';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CompanionsService } from './companions.service';

describe('CompanionsService', () => {
  let service: CompanionsService;
  const mockCompanionModel = { find: ({}) => ({ exec: () => ({}) }) };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompanionsService,
        {
          provide: getModelToken('Companion'),
          useValue: mockCompanionModel,
        },
      ],
    }).compile();

    service = module.get<CompanionsService>(CompanionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all companions except myself', async () => {
    // Arrange.
    const myOwnId = 'angular';
    const companions: Array<Partial<CompanionDetails>> = [
      {
        id: 'other',
        name: 'John Doe',
        markdownName: 'John *D*oe',
        favoriteColor: 'blue',
        characteristics: ['nothing'],
        avatar: 'avatar',
      },
    ];

    const mockQuery = { exec: () => Promise.resolve(companions) };
    jest.spyOn(mockCompanionModel, 'find').mockImplementation(_ => mockQuery);

    // Act.
    const result = await service.findAll();

    // Assert.
    expect(result).toBe(companions);
    expect(mockCompanionModel.find).toBeCalledWith({ id: { $ne: myOwnId } });
  });
});
