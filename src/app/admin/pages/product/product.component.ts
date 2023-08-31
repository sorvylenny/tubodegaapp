import { Component,  Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/store/interfaces/store.interface';
import { TableColumns } from 'src/app/shared/interface/table-columns';
import { CurrencyFormatPipe } from 'src/app/shared/pipe/currency.pipe';

const productos: Product[] = [
  {
    id: '1',
    title: 'Azúcar Incauca light vitamina D3, bolsa 750g',
    price: 7000,
    description: 'Azúcar light con la mitad de calorías con Stevia y fortificado con Vitamina D3, que ayuda a fijar el calcio en los huesos.',
    images: ['']

  },
  {
    id: '2',
    title: 'Sal Refisal bolsa 3000kg',
    price: 5000,
    description: 'Sal Refisal es la sal que no puede faltar en la cocina y en la mesa.',
    images: ['']
  },
  {
    id: '3',
    title: 'Mantequilla Colanta sin sal x125g',
    price: 5000,
    description: 'Una mantequilla suave y deliciosa para esparcir sobre tus comidas preferidas o para ser parte de preparaciones como tortas, galletas y más.',
    images: ['']
  },
  {
    id: '4',
    title: 'Arroz Diana blanco x1kg',
    price: 4590,
    description: 'Proporciónale todo el amor a tu familia con el delicioso Arroz Diana.',
    images: ['']
  },
  {
    id: '5',
    title: 'Crema Dental Colgate Triple Acción x3und x75ml c/u',
    price: 19790,
    description: 'Triple beneficio, protección, blancura y frescura.',
    images: ['']
  },
  {
    id: '6',
    title: 'Pasta Clásica Spaghetti Doria x 250 g',
    price: 2000,
    description: 'El Spaghetti es una pasta larga con múltiples y fáciles formas de preparación; perfecta para acompañar con salsas, carnes y verduras.',
    images:['']
  },

];

//Todo: hacer la coneccion de product al servicio//

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  tableColumns: TableColumns[] = [];
  productList = productos;
  @Input() dataSource!: any;
  @Input() filterValue : string = ''; 
  @Input() Product: Product [] = [];
  filteredProducts = this.Product;
  displayedColumns: string[] = []; // Declaración vacía inicialmente
  clickedRows: Product[] = [];
  selectedProduct: Product = {
    id: '',
    title:'',
    price: 0,
    description: '',
    images: ['']
  }; 
  paginator: any;


  constructor(private router: Router ) {}
  
  ngOnInit(): void {
    this.Product = productos;
    this.setTableColumns();
    this.handleFilterChanged('');
    this.getTablaData();
  }

  handleFilterChanged(filterValue: string) {
    this.filterValue = filterValue;
    if (this.Product) {
      this.filteredProducts = this.Product.filter((item: any) => {
        // Replace 'title' with the property you want to filter on
        return item.title.toLowerCase().includes(this.filterValue.toLowerCase());
      });
    
      this.productList = this.filteredProducts;
    }
  }

  getTablaData() {
    // Aquí obtienes los datos para la tabla
    this.dataSource = new MatTableDataSource(this.Product);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    }, 0);
  }

  selectedData(product: Product) {
    if (product && product.id !== undefined) {
      this.selectedProduct = product;
      this.router.navigate(['admin/detailsProduct', product.id]);
    } 
}
  
  
  setTableColumns() {
    this.tableColumns = [
      { ColumnDef: 'id', HeaderCellDef: 'Id', dataKey: 'id' },
      { ColumnDef: 'title', HeaderCellDef: 'title', dataKey: 'title' },
      { ColumnDef: 'price', HeaderCellDef: 'Price',dataKey: 'price',  pipe: new CurrencyFormatPipe('es-CO') },
      { ColumnDef: 'description', HeaderCellDef: 'Description', dataKey: 'description' },
      { ColumnDef: 'images', HeaderCellDef: 'images', dataKey: 'images', altText : '' },
          
    ];
    this.displayedColumns = this.tableColumns.map(column => column.ColumnDef);
  
  }
  detailsId(event:any): void {
    // Aquí puedes usar el ID para navegar a la página de detalles
    this.router.navigate(['admin/detailsProduct', event]);
    console.log(event);
  }
}



/*   handleFilterChanged(filterValue: string) {
    this.filterValue = filterValue;
    if (this.Product) {
      this.filteredProducts = this.Product.filter((item: any) => {
        // Replace 'title' with the property you want to filter on
        return item.title.toLowerCase().includes(this.filterValue.toLowerCase());
      });
      console.log(this.filteredProducts);
      this.dataSource = new MatTableDataSource(this.filteredProducts);
      this.dataSource.paginator = this.paginator;
    }
  } */
