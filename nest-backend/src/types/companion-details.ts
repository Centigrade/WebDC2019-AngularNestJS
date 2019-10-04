import { Companion } from './companion';

export interface CompanionDetails extends Companion {
  characteristics: string[];
  favoriteColor: string;
}
