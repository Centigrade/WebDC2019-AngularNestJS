import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SAMPLE_COMPANIONS } from '../data/sample-companions';
import { Companion } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CompanionsService {
  public getAll(): Observable<Companion[]> {
    return of(SAMPLE_COMPANIONS);
  }
}
