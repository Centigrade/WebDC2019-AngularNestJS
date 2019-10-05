import { Companion, CompanionDetails } from '@interfaces';
import {
  SAMPLE_COMPANIONS as allCompanions,
  SAMPLE_COMPANIONS_DETAILS,
} from '@interfaces/data/sample-companions';
import { Injectable } from '@nestjs/common';

function retrieveCompanionDetails(id: string): CompanionDetails {
  return SAMPLE_COMPANIONS_DETAILS.find(companion => companion.id === id);
}

@Injectable()
export class CompanionsService {
  private readonly companions = allCompanions;

  findAll(): Companion[] {
    // Get companions from a DB or something the like.
    // Do some magic...
    return this.companions;
  }

  findDetailsById(id: string): CompanionDetails {
    // Get companion details from a DB or something the like.
    const companionDetails = retrieveCompanionDetails(id);
    // Do some magic...
    return companionDetails;
  }
}
