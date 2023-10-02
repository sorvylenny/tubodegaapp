import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    const url = `${this.baseUrl}/users/users`;  
    return this.http.get<User[]>(url);

  }
  getById(id: number):Observable<User>{
    const url = `${this.baseUrl}/users/update-details/${id}`;
    return this.http.patch<User>(url, {});
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
