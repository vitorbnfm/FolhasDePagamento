import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folha } from '../models/folha';

@Injectable({
  providedIn: 'root'
})
export class FolhaService {
  private baseURL = "http://localhost:5000/api/folha";

  constructor(private http: HttpClient) {}

  create(folha: Folha): Observable<Folha> {
    return this.http.post<Folha>(`${this.baseURL}/create`, folha);
  }
  list(): Observable<Folha[]> {
      return this.http.get<Folha[]>(`${this.baseURL}/list`);
  }
  delete(id: any): Observable<any> {
    return this.http.delete<Folha>(`${this.baseURL}/delete/${id}`);
  }

  

}