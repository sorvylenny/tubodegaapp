import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  //TODO convertir esta sección del codigo en un guard para ser aplicado en el resto de endpoints protegidos
  userAll(): Observable<User[]> {
    const url = `${this.baseUrl}/users/users`;
    const singedToken = localStorage.getItem('token');
    if (singedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${singedToken}`,
      });
      return this.http.get<User[]>(url, { headers });
    } else {
      return of([]);
    }
  }

  userById(id: string): Observable<User | null> {
    const url = `${this.baseUrl}/users/user/${id}`;
    const singedToken = localStorage.getItem('token');
    if (singedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${singedToken}`,
      });
    return this.http.get<User>(url, {headers} );
   } else {
        return of(null);
      }
  }

  EditUser(id: string): Observable<User> {
    const url = `${this.baseUrl}/users/user/${id}`;
    const signedToken = localStorage.getItem('token');
  
    if (signedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${signedToken}`,
      });
  
      return this.http.patch<User>(url, { headers });
    } else {
      // Manejar el caso en el que no se encuentra un token
      return throwError("No se encontró un token de autenticación en el almacenamiento local.");
    }
  }
  

  deleteUser(id: string): Observable<User[]> {
    const url = `${this.baseUrl}/delete-detail/${id}`;
    const singedToken = localStorage.getItem('token');
    if (singedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${singedToken}`,
      });
      return this.http.delete<User[]>(url, { headers });
    } else {
      // Manejar el caso en el que no se encuentra un token
      return throwError("No se encontró un token de autenticación en el almacenamiento local.");
    }
  }
}
