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

 getCurrentUser(): Observable<string[]> {
  return this.getCurrentUserFromLocalStorage().pipe(
    map(user => {
      if (user && user.roles) {
        return user.roles.map(role => role.toString());
      } else {
        return [];
      }
    })
  );
 }

private getCurrentUserFromLocalStorage(): Observable<User | null> {
  const userString = localStorage.getItem('currentUser');
  if (userString) {
    const currentUser: User = JSON.parse(userString);
    return of(currentUser);
  } else {
    return of(null);
  }
}


  registerUser(UserData:User): Observable<boolean>{
    const url = `${this.baseUrl}/auth/register`;
    const body = UserData;
    return this.http.post<User>(url, body)
    .pipe(
      tap(({ ok, token }) => {
        if (ok) {
          localStorage.setItem('token', token!);
        }
      }),
      map(resp => resp.ok as boolean),
      catchError(err => of(false))  // Cambiado a catchError para devolver un Observable<boolean>
    );
}

login(user: User): Observable<boolean> {
  const url = `${this.baseUrl}/auth/login`;
  const body = user;

 // Realizar la solicitud HTTP POST y manejar la respuesta
 return this.http.post<User>(url, body).pipe(

   map((resp: any) => {
     // Verifica si la respuesta es exitosa (ok) y tiene roles
     if (resp ) {
       localStorage.setItem('token', resp.token!);

        // Redirige según el rol
        if (resp.roles = Roles.admin) {
          this.router.navigate(['admin']);
        } else if (resp.roles = Roles.user) {
          this.router.navigate(['home']);
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


}
