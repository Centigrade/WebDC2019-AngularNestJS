import { Companion, CompanionDetails } from '@interfaces';
import { Controller, Get, Param } from '@nestjs/common';
import { CompanionsService } from '../../services/companions/companions.service';

@Controller('companions')
export class CompanionsController {
  constructor(private service: CompanionsService) {}

  @Get()
  async getAll(): Promise<Companion[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async getCompanionDetails(@Param('id') id: string): Promise<CompanionDetails> {
    return this.service.findDetailsById(id);
  }
}
