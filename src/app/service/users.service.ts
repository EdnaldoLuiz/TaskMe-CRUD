import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'https://taskme-crud-production.up.railway.app/users'; // substitua pela URL do seu backend

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  updateUser(email: string, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${email}`, user);
  }

  deleteUser(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${email}`);
  }
}
