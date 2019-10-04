import { Controller, Get, Param } from '@nestjs/common';
import { CompanionsService } from 'src/services/companions/companions.service';
import { Companion, CompanionDetails } from '../../../../dtos/types';

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
