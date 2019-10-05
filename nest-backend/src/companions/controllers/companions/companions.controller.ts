import { Companion, CompanionDetails } from '@interfaces';
import { Controller, Get, Param } from '@nestjs/common';
import { CompanionsService } from '../../services/companions/companions.service';

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
