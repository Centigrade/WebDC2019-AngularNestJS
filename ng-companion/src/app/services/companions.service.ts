import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Companion, CompanionDetails } from '@interfaces';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000';
const COMPANIONS_ROUTE = 'companions';
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
    const url = `${BASE_URL}/${COMPANIONS_ROUTE}/${id}`;
    return this.http.get<CompanionDetails>(url);
  }

  public sayHello(myId: string, contactId: string): Observable<string> {
    const url = `${BASE_URL}/${CONTACT_ROUTE}`;
    const body = { myId, contactId };
    return this.http.post(url, body, { responseType: 'text' });
  }
}
