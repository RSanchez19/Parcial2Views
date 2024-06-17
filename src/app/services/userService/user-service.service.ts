import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getUserByUsernameOrEmail(usernameOrEmail: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/username-or-email/${usernameOrEmail}`);
  }
}