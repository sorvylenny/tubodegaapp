import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TableColumns } from '../interface/table-columns';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Product } from 'src/app/store/interfaces/store.interface';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = [];
  dataSource : any = [];
  tableColumns: TableColumns [] = [];
  @Input() showButton!: boolean;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  clickedRows: any[] = [];
  @Output() detailsId = new EventEmitter<Product>();
  selectedData: any;
  selectedProduct: any;
 
  
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
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }
 
  getTablaData() {
    // Aquí obtienes los datos para la tabla
    this.dataSource = new MatTableDataSource(this.data);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    }, 0);
  }

  onRowClick(product: Product) {
    this.detailsId.emit(product);
 
    }
  }
  

  /* detailsId(id: number) {
    this.verMasClicked.emit(id);

    // Aquí se agrega el elemento clicado a la propiedad clickedRows
    const clickedRow = this.dataSource.find((element: any) => element.id === id);
    if (clickedRow) {
      this.clickedRows.push(clickedRow);
    }
  } */
