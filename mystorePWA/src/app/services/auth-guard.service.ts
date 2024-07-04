import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _storage: Storage | null = null;

  constructor(private http: HttpClient, private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post('http://localhost:8080/api/authenticate', credentials).pipe(
      tap((res: any) => {
        this._storage?.set(TOKEN_KEY, res.id_token);
      })
    );
  }

  async isLoggedIn(): Promise<boolean> {
    const token = await this._storage?.get(TOKEN_KEY);
    return !!token;
  }

  async logout() {
    await this._storage?.remove(TOKEN_KEY);
  }
}
