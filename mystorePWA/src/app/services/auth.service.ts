import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<void> {
    return this.http.post<{ id_token: string }>(`${this.apiUrl}/authenticate`, credentials)
      .pipe(
        map(response => {
          if (response.id_token) {
            localStorage.setItem('authenticationToken', response.id_token);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('authenticationToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authenticationToken');
  }

  getAuthenticatedHeaders(): HttpHeaders {
    const token = this.getToken();
    if (token) {
      return new HttpHeaders().set('Authorization', 'Bearer ' + token);
    } else {
      throw new Error('No authentication token found');
    }
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
