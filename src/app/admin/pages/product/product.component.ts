import { Component,  Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/store/interfaces/store.interface';
import { TableColumns } from 'src/app/shared/interface/table-columns';
import { CurrencyFormatPipe } from 'src/app/shared/pipe/currency.pipe';
import { ProductService } from 'src/app/store/services/product.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  tableColumns: TableColumns[] = [];
  productos: Product[]=[];
  productList = this.productos;
  @Input() dataSource!: any;
  searchControl = new FormControl() ;
  @Input() Product: Product [] = [];
  filteredProducts = this.Product;
  displayedColumns: string[] = []; // Declaración vacía inicialmente
  clickedRows: Product[] = [];
  selectedProduct: Product = {
    id: '',
    title:'',
    price: 0,
    description: '',
    images:'',
  }; 
  pageIndex: number = 0;
  pageSize: number = 10;
  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(private router: Router, private productService: ProductService ) {}
  
  ngOnInit(): void {
    this.setTableColumns();
    this.handleFilterChanged('');

    this.getTablaData(this.pageIndex);
  }
  
  getTablaData(page: number) {
    this.pageIndex=page;
   this.productService.getProducts(this.pageSize, page)
       .subscribe( product => {
        this.productos = product;
        console.log(product);
        this.handleFilterChanged(this.searchControl.value);
        this.productList = this.productos;
        this.dataSource = new MatTableDataSource(this.productList);
        this.dataSource.paginator = this.paginator;
       });
    
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex; // Actualizar el índice de la página actual
    this.getTablaData(event.pageIndex + 1);
  }

  handleFilterChanged(filterValue: string): void {
    this.searchControl.setValue(filterValue);
    this.searchControl.setValue('');
    
    if (filterValue.trim() === '') {
      this.productList = [];
      return;
    }

    this.productList = this.productList.filter(item => 
      item.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }


  selectedData(product: Product) {
    if (product && product.id !== undefined) {
      this.selectedProduct = product;
      this.router.navigate(['admin/detailsProduct', product.id]);
    } 
}
  
  
  setTableColumns() {
    this.tableColumns = [
      { ColumnDef: 'title', HeaderCellDef: 'Title', dataKey: 'title' },
      { ColumnDef: 'price', HeaderCellDef: 'Price',dataKey: 'price',  pipe: new CurrencyFormatPipe('es-CO') },
      { ColumnDef: 'description', HeaderCellDef: 'Description', dataKey: 'description' },
      { ColumnDef: 'stock', HeaderCellDef: 'stock', dataKey: 'stock' },          
    ];
    this.displayedColumns = this.tableColumns.map(column => column.ColumnDef);
  
  }
  detailsId(event:any): void {
    // Aquí puedes usar el ID para navegar a la página de detalles
    this.router.navigate(['admin/detailsProduct', event]);
    console.log(event);
  }


}

