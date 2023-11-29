import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { User } from '../admin/interface/user';
import { Login } from './interface/login';
import { RegisterResponse } from './interface/registerResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl +'/auth/';
  private authToken!: string;

  setAuthToken(token: string) {
    this.authToken = token;
  }

  constructor(private http: HttpClient) { }

  registerUser(userData: User): Observable<User> {
    const url = `${this.baseUrl}register`;
    console.log(url);
    return this.http.post<User>(url, userData);
  }




login(required: Login) {
  const url = `${this.baseUrl}login`;

  return this.http.post<User>(url, required).pipe(
    map((resp: any) => { {
        this.setAuthToken(resp.token);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('fullName', resp.user.fullName);
        localStorage.setItem('roles',resp.user.roles);
        console.log(resp);
        return true;
      }
    }),
    catchError(err => {
      console.error('Error durante el inicio de sesión:', err);
      return of(false);
    })
  );
}


logout(){
  localStorage.clear();
}

}
