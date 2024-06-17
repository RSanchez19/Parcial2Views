import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = 'https://localhost:8080/api/roles';

  constructor(private http: HttpClient) { }

  updateUserRole(userId: number, newRole: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/update-role`, { userId, newRole });
  }
}