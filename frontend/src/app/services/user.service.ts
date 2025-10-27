import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/api/users";

  constructor(private httpClient: HttpClient) {}

  register(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/register`, data);
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, { email, password });
  }
}

