import { Companion, CompanionDetails } from '@interfaces';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { CompanionsService } from '../../services/companions/companions.service';

@ApiUseTags('companions')
@Controller('companions')
export class CompanionsController {
  constructor(private service: CompanionsService) {}

  @Get()
  @ApiOperation({ title: 'Get all companions near you.' })
  @ApiResponse({ status: 200, description: 'An array of companions near you.' })
  async getAll(): Promise<Companion[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ title: 'Get details for a companion identified by his id.' })
  @ApiResponse({ status: 200, description: 'Details for this companion.' })
  async getCompanionDetails(@Param('id') id: string): Promise<CompanionDetails> {
    return this.service.findDetailsById(id);
  }
}
