import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

/*   users_List: User[] = [
    {id: 1, name: 'Pedro', correo: 'test1@prueba.com', rol: 'admin'},
    {id: 2, name: 'Helen',   correo: 'test2@prueba.com', rol: 'user'},
    {id: 3, name: 'Lidia',  correo: 'test3@prueba.com', rol: 'admin'},
    {id: 4, name: 'Beth',correo: 'test4@prueba.com', rol: 'user'},
    {id: 5, name: 'Brown',    correo: 'test5@prueba.com', rol: 'user'},
    {id: 6, name: 'Carl',   correo: 'test6@prueba.com', rol: 'user'},
    {id: 7, name: 'Nidia', correo: 'test7@prueba.com', rol: 'user'},
    {id: 8, name: 'Oxangel',   correo: 'test8@prueba.com', rol: 'user'},
    {id: 9, name: 'Fiorella', correo: 'test9@prueba.com', rol: 'user'},
    {id: 10, name: 'Nerio',    correo: 'test10@prueba.com', rol: 'user'},
  ]; */

  constructor() { }
/* 
  getAll(): User[]{
    return this.users_List;
  }
  getById(id: number): User | undefined {
    return this.users_List.find(user => user.id === id);
  }
  new(newUser: User): void {
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
