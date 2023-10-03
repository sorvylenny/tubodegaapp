import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable, of } from 'rxjs';
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

  /* getSeach( query: string ): Observable<User[]> {
    return this.http.get<User[]>(`${ this.baseUrl }/users/${query}`);
  } */
  /*  new(newUser: User): void {
    this.users_List.push(newUser);
  }

  update(updatedUser: User): void {
    const index = this.users_List.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users_List[index] = updatedUser;
    }
  }
  delete(id: number): void {
    this.users_List = this.users_List.filter(user => user.id !== id);
  } */
}
