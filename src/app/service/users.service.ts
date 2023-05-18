import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { HttpClient} from '@angular/common/http';
import { Users} from 'src/app/model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  baseUrl: String = 'http://localhost:8080/';

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserByEmail(email: String): Observable<any> {
    return this.http.get(this.baseUrl + email);
  }

  createUser(user: Users): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }
}
