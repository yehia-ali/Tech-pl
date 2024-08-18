import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  submitLogin(data: string) {
    return this.http.post(`${environment.envUrl}/auth/login`, data);
  }
}
