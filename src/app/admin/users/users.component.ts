import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { MatSort } from '@angular/material/sort';
import { TableColumns } from 'src/app/shared/interface/table-columns';
import { User } from '../interface/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'correo', 'rol', 'ver'];
  dataSource:  any = [];
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  tableColumns: TableColumns[]=[];
  user : User []=[]

  

  constructor(private router: Router, private userService: UsersService) {}
  ngOnInit(): void {
   this.dataSource = new MatTableDataSource(this.userService.Data);
   this.dataSource.sort = this.sort;
  }

  setTableColumns(){
    this.tableColumns = [
      {HeaderCellDef: 'name', ColumnDef: 'name', dataKey: 'name' },
      {HeaderCellDef: 'id', ColumnDef: 'id', dataKey: 'id' },
      {HeaderCellDef: 'correo', ColumnDef: 'correo', dataKey: 'correo' },
      {HeaderCellDef: 'rol', ColumnDef: 'rol', dataKey: 'rol' },
      {HeaderCellDef: 'ver mas', ColumnDef: 'ver', dataKey: 'ver' },
    ]
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detailsId( id: number){
    this.router.navigate(['admin/detailsUser', id]);
  }

}
