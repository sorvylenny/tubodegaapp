import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../admin/interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  registerUser(UserData:any): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/auth/register`, UserData);
  }


}
