import { Controller, Get, Param } from '@nestjs/common';
import { CompanionsService } from 'src/services/companions/companions.service';
import { SAMPLE_COMPANIONS_DETAILS } from '../..//data/sample-companions';
import { Companion, CompanionDetails } from '../../types';

function retrieveCompanionDetails(id: string): CompanionDetails {
  return SAMPLE_COMPANIONS_DETAILS.find(companion => companion.id === id);
}

@Controller('companions')
export class CompanionsController {
  constructor(private service: CompanionsService) {}

  @Get()
  getAll(): Companion[] {
    return this.service.findAll();
  }

  @Get(':id')
  getCompanionDetails(@Param('id') id: string): CompanionDetails {
    return this.service.findDetailsById(id);
  }
}
