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
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ModelProductComponent } from '../../Models/model-product/model-product.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  page: number = 1;
  pageSize: number =10;
  ColumnsTable: string[] = [
    'nombre',
    'precio',
    'descripcion',
    'stock',
    'acciones'
  ];
  dataInit: Product[] = [];
  dataListProducts = new MatTableDataSource(this.dataInit);
  @ViewChild(MatPaginator) paginatorTable!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private productService: ProductService,
  ) {}

  obtenerProducts() {
    this.productService.getProducts(this.page, this.pageSize).subscribe(
      (data: Product[]) => {
        if (data.length > 0) {
          this.dataListProducts.data = data;
          console.log(data)
        } else {
          Swal.fire('Error', 'No se encontraron productos. Ha ocurrido un error.', 'error');
        }
      },
      (error) => {
        Swal.fire('Error', 'Error al obtener productos. Ha ocurrido un error.', 'error');
      }
    );
  }
  

  ngOnInit(): void {
    this.obtenerProducts();
  }
  ngAfterViewInit(): void {
    this.dataListProducts.paginator = this.paginatorTable;
  }

  appSearchTable(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListProducts.filter = filterValue.trim().toLocaleLowerCase();
  }

  newProduct(){
    this.dialog.open(ModelProductComponent, {
      disableClose:true
    }).afterClosed().subscribe(res =>{
      if(res ==="true") this.obtenerProducts();
    });
  }

  editProduct(product:Product){
    this.dialog.open(ModelProductComponent, {
      disableClose:true,
      data: product
    }).afterClosed().subscribe(res =>{
      if(res ==="true") this.obtenerProducts();
    });
  }

  deleteProduct(product: Product) {
    Swal.fire({
      title: '¿Estás seguro de eliminar el Producto?',
      text: product.title,
      icon: 'warning',
      confirmButtonColor: '#1ABC9C',
      confirmButtonText: "Sí, eliminar",
      showCancelButton: true,
      cancelButtonText: "No, Regresar",
      cancelButtonColor: '#C0392B'
    }).then((result) => { 
      if (result.isConfirmed) { 
        this.productService.deleteProduct(product.id).subscribe({
          next: (res) => {
            if (res.status) {
              alert("El Producto fue eliminado");
              this.obtenerProducts();
            } else {
              alert("No se pudo eliminar el producto");
            }
          },
          error: (e) => { }
        });
      }
    });
  } 
}

