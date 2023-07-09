import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Data: User[] = [
    {id: 1, name: 'Hydrogen', correo: 'test1@prueba.com', rol: 'admin'},
    {id: 2, name: 'Helium',   correo: 'test1@prueba.com', rol: 'user'},
    {id: 3, name: 'Lithium',  correo: 'test1@prueba.com', rol: 'admin'},
    {id: 4, name: 'Beryllium',correo: 'test1@prueba.com', rol: 'user'},
    {id: 5, name: 'Boron',    correo: 'test1@prueba.com', rol: 'user'},
    {id: 6, name: 'Carbon',   correo: 'test1@prueba.com', rol: 'user'},
    {id: 7, name: 'Nitrogen', correo: 'test1@prueba.com', rol: 'user'},
    {id: 8, name: 'Oxygen',   correo: 'test1@prueba.com', rol: 'user'},
    {id: 9, name: 'Fluorine', correo: 'test1@prueba.com', rol: 'user'},
    {id: 10, name: 'Neon',    correo: 'test1@prueba.com', rol: 'user'},
  ];

  constructor() { }

  getAll(){}
  getById(){}
  new(){}
  update(){}
  delate(){}
}
