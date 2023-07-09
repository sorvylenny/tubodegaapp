import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TableColumns } from '../interface/table-columns';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource : any = [];
  tableColumns: TableColumns [] = []
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  
  @Input() set data(data: any) {
    this.dataSource = data;
  }

  @Input() set columns (columns: TableColumns[]){
    this.tableColumns = columns;
    this.displayedColumns = this.tableColumns.map( (col) => col.ColumnDef);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detailsId( id: number){
    this.router.navigate(['admin/detailsUser', id]);
  }
 
}