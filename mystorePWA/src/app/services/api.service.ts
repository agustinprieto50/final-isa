import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/api';
  private apiKey = 'aP1cRf4M9kzT3hVrYbX8vTzL1jNpQhW4'; // Use the same API key configured in the backend

  constructor(private http: HttpClient) { }

  getData(endpoint: string): Observable<any> {
    const headers = new HttpHeaders().set('X-API-KEY', this.apiKey);
    return this.http.get(`${this.baseUrl}/${endpoint}`, { headers });
  }

  postData(endpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders().set('X-API-KEY', this.apiKey);
    return this.http.post(`${this.baseUrl}/${endpoint}`, data, { headers });
  }
}