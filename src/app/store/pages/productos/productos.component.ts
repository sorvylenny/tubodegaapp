import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/store.interface';
import { FormControl } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  filteredProducts: Product[] = [];
  filterValue= new FormControl() ;
  productList: Product[] = [];
  length = 53;
  pageSize = 10;
  pageIndex = 0;
  showFirstLastButtons = true;

  constructor( private productService: ProductService){} 

   ngOnInit(): void {
    this.addProducts(this.pageIndex ); 
    this.handleFilterChanged('');
  }
  cartItems: Product[] = [];
  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  addProducts(page: number): void {
    this.productService.getProducts( this.pageSize , page)
        .subscribe(products => { 
            this.productList = products;
            this.handleFilterChanged(this.filterValue.value);
      });
  }
  
  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex; // Actualizar el índice de la página actual
    this.addProducts(event.pageIndex + 1);
  }

  handleFilterChanged(filterValue: string): void {
    this.filterValue.setValue(filterValue);
      this.filteredProducts = this.productList.filter((item: Product) => {
        // Replace 'name' with the property you want to filter on
        return item.title.toLowerCase().includes(this.filterValue.value.toLowerCase());
      });
      this.productList = this.filteredProducts;

      if (this.productList.length === 0) {
        this.filterValue.setValue('');
      }
    }
  
  info_Product(){}
}