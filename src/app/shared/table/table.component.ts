import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TableColumns } from '../interface/table-columns';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource : any = [];
  tableColumns: TableColumns [] = [];
  @Output() detailClicked = new EventEmitter<any>();
  @Input() showButton!: boolean;
  
  
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
  mostrarDetalle(producto: any) {
    this.detailClicked.emit(producto);
  }

   detailsId( id: number){
    this.router.navigate(['admin/detailsUser', id]);
  }
 
 /*  handleFilterChanged(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  } */

  handleFilterChanged(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}