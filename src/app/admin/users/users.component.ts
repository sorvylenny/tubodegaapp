import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { TableColumns } from 'src/app/shared/interface/table-columns';
import { User } from '../interface/user';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = []; // Declaración vacía inicialmente
  dataSource: User[] = []; // Usaremos este para la tabla
  filterValue: string = '';
  tableColumns: TableColumns[] = [];
  user: User[] = [];
  filteredUser: User[] = []; // Inicialmente estará vacío


  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {
    this.allUsers(); //  lista de usuarios
    this.setTableColumns(); // Configuración las columnas de la tabla
    this.filteredUser = this.user; // Inicializa, los usuarios filtrados serán todos los usuarios
    this.dataSource = this.filteredUser; // Configuración el origen de datos para la tabla
   
  }
   allUsers(): void {
     this.userService.userAll().subscribe((result: User[])=>{
      this.dataSource= result; 
      console.log(this.dataSource);
     });
  }

  setTableColumns(){
    this.tableColumns = [
      {HeaderCellDef: 'Nombre Completo', ColumnDef: 'FullName', dataKey: 'fullName' },
      {HeaderCellDef: 'Usuario', ColumnDef: 'userName', dataKey: 'userName' },
      {HeaderCellDef: 'Email', ColumnDef: 'correo', dataKey: 'email' },
      {HeaderCellDef: 'Id', ColumnDef: 'id', dataKey: 'id' },
      {HeaderCellDef: 'Roles', ColumnDef: 'rol', dataKey: 'roles' },
      
    ]
  }

  handleFilterChanged(filterValue: string) {}

  detailsId(event:any): void {
    // Aquí puedes usar el ID para navegar a la página de detalles
    this.router.navigate(['admin/detailsUser', event]);
  }
  
}
