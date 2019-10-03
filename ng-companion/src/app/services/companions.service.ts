import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SAMPLE_COMPANIONS, SAMPLE_COMPANIONS_DETAILS } from '../data/sample-companions';
import { Companion, CompanionDetails } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CompanionsService {
  public getAll(): Observable<Companion[]> {
    return of(SAMPLE_COMPANIONS);
  }

  public getDetails(id: string): Observable<CompanionDetails> {
    return of(SAMPLE_COMPANIONS_DETAILS.find(details => details.id === id));
  }

  public sayHello(myId: string, contactId: string): Observable<void> {
    console.log(`Companion '${myId}' says hello to '${contactId}'.`);
    return of();
  }
}
