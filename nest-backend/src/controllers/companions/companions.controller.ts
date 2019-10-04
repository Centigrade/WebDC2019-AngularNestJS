import { Controller, Get, Param } from '@nestjs/common';
import {
  SAMPLE_COMPANIONS as allCompanions,
  SAMPLE_COMPANIONS_DETAILS,
} from '../..//data/sample-companions';
import { Companion, CompanionDetails } from '../../types';

function retrieveCompanionDetails(id: string): CompanionDetails {
  return SAMPLE_COMPANIONS_DETAILS.find(companion => companion.id === id);
}

@Controller('companions')
export class CompanionsController {
  @Get()
  getAll(): Companion[] {
    // Get companions from a DB or something the like.
    // Do some magic...
    return allCompanions;
  }

  @Get(':id')
  getCompanionDetails(@Param('id') id: string): CompanionDetails {
    // Get companion details from a DB or something the like.
    const companionDetails = retrieveCompanionDetails(id);
    // Do some magic...
    return companionDetails;
  }
}
