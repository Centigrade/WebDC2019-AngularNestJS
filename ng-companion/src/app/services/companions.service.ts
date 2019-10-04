import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companion, CompanionDetails } from '../types';

const BASE_URL = 'http://localhost:3000';
const COMPANIONS_ROUTE = 'companions';
const COMPANION_ROUTE = 'companion';
const CONTACT_ROUTE = 'contact';

@Injectable({
  providedIn: 'root',
})
export class CompanionsService {
  constructor(private http: HttpClient) {}
  public getAll(): Observable<Companion[]> {
    const url = `${BASE_URL}/${COMPANIONS_ROUTE}`;
    return this.http.get<Companion[]>(url);
  }

  public getDetails(id: string): Observable<CompanionDetails> {
    const url = `${BASE_URL}/${COMPANION_ROUTE}/${id}`;
    return this.http.get<CompanionDetails>(url);
  }

  public sayHello(myId: string, contactId: string): Observable<void> {
    const url = `${BASE_URL}/${CONTACT_ROUTE}`;
    const body = { myId, contactId };
    console.log(`Companion '${myId}' says hello to '${contactId}'.`);
    return this.http.post<void>(url, body);
  }
}
