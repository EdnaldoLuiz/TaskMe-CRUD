import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'https://taskme-crud-production.up.railway.app/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createUser(newUser: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, newUser);
  }

  updateUser(email: string, user: any): Observable<any> {
    const url = `${this.baseUrl}/${encodeURIComponent(email)}`;
    return this.http.put<any>(url, user);
  }

  deleteUser(email: string): Observable<any> {
    const url = `${this.baseUrl}/${encodeURIComponent(email)}`;
    return this.http.delete<any>(url);
  }
}
