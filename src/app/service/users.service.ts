import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createUser(newUser: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, newUser);
  }

  updateUser(id: string, user: any): Observable<any> {
    const url = `${this.baseUrl}/${encodeURIComponent(id)}`;
    return this.http.put<any>(url, user);
  }

  deleteUser(id: string): Observable<any> {
    const url = `${this.baseUrl}/${encodeURIComponent(id)}`;
    return this.http.delete<any>(url);
  }
}
