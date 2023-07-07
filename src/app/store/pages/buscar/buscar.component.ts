import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/store.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  products!: Product[];
  searchTerm: string ='';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  search(): void {
    this.products = this.productService.searchProducts(this.searchTerm);
  }
}
