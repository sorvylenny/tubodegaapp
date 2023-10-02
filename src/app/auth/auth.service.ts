import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Roles, User } from '../admin/interface/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  get user(){
    return{...this._user}
  }

  constructor(private http: HttpClient,  private router: Router) { }


registerUser(userData: User) {
  const url = `${this.baseUrl}/auth/register`; 
  console.log('URL:', url);
  console.log('User Data:', userData);

  return this.http.post(url, userData).pipe(
    tap((response: any) => {
      console.log('Response:', response);

    
      if (response && response.ok) {
        localStorage.setItem('token', response.token);
      }
    }),
    map((response: any) => response.ok),  
    catchError((error: any) => {
      console.error('Error:', error);
      return of(false);  
    })
  );
}

 

login(email: string, password: string) {
  const url = `${this.baseUrl}/auth/login`;
  const body = { email, password };

 // Realizar la solicitud HTTP POST y manejar la respuesta
 return this.http.post<User>(url, body).pipe(

   map((resp: any) => {
     // Verifica si la respuesta es exitosa (ok) y tiene roles
     if (resp ) {
       localStorage.setItem('token', resp.token!);
       localStorage.setItem('userName', resp.userName); 
       console.log('usuario almacenado en localstore:', resp);

        // Redirige según el rol
        if (resp.roles && resp.roles.includes('admin')) {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['store']);
        }
    
        return true;  // Autenticación exitosa
      }

      catchError(err => {
        console.error('Error during login:', err);
        return of(false);  // Autenticación fallida por error
      })
      return false;  // Autenticación fallida
    }),
  );
}

logout(){
  localStorage.clear();
}

}
