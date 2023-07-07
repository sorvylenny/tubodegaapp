import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';



/* export interface Users{
  id: number;
  name: string;
  last?: string;
  correo: string;
  rol: string;
  password?: string;
} */
export interface User {
  name: string;
  id: number;
  correo: string;
  rol: string;
}

const Data: User[] = [
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


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'correo', 'rol', 'ver'];
  dataSource = new MatTableDataSource(Data);

  constructor(private router: Router) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detailsId(){
    this.router.navigate(['detailsUser/:id']);
  }

}
