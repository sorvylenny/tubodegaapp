import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/store/interfaces/store.interface';

const productos: Product[] = [
  {
    id: 1,
    name: 'Azúcar Incauca light vitamina D3, bolsa 750g',
    price: 7000,
    description: 'Azúcar light con la mitad de calorías con Stevia y fortificado con Vitamina D3, que ayuda a fijar el calcio en los huesos.',
    image: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/185648-1600-1600?v=637813979704500000&width=1600&height=1600&aspect=true'
  },
  {
    id: 2,
    name: 'Sal Refisal bolsa 3000kg',
    price: 5000,
    description: 'Sal Refisal es la sal que no puede faltar en la cocina y en la mesa.',
    image: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/192055-800-800?v=637814017441900000&width=800&height=800&aspect=true'
  },
  {
    id: 3,
    name: 'Mantequilla Colanta sin sal x125g',
    price: 5000,
    description: 'Una mantequilla suave y deliciosa para esparcir sobre tus comidas preferidas o para ser parte de preparaciones como tortas, galletas y más.',
    image: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/192971-800-800?v=637814023150330000&width=800&height=800&aspect=true'
  },
  {
    id: 4,
    name: 'Arroz Diana blanco x1kg',
    price: 4590,
    description: 'Proporciónale todo el amor a tu familia con el delicioso Arroz Diana.',
    image: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/186299-1600-1600?v=637813981775570000&width=1600&height=1600&aspect=true'
  },
  {
    id: 5,
    name: 'Crema Dental Colgate Triple Acción x3und x75ml c/u',
    price: 19790,
    description: 'Triple beneficio, protección, blancura y frescura.',
    image: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/360135-800-800?v=637858855860470000&width=800&height=800&aspect=true'
  },
  {
    id: 6,
    name: 'Pasta Clásica Spaghetti Doria x 250 g',
    price: 2000,
    description: 'El Spaghetti es una pasta larga con múltiples y fáciles formas de preparación; perfecta para acompañar con salsas, carnes y verduras.',
    image: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/186130-800-800?v=637813981192900000&width=800&height=800&aspect=true'
  },

];



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 /*  @Input() products!: Product[]; */
  displayedColumns: string[] = ['id', 'name', 'price', 'descripcion', 'imagen', 'ver'];
  dataSource = new MatTableDataSource(productos);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
