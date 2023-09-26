import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/store/interfaces/store.interface';
import { ProductService } from 'src/app/store/services/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  selectedProduct: Product | undefined ; 
 
  productos: Product[] = [];
  id: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') || ''; // Asigna el ID a la variable
      this.productById(this.id); // Llama a productById con el ID
    });
  }
   
  selectedData(product: Product) {
      this.selectedProduct = product;
  }
  productById(id:string): void{
      this.productService.getProductById(id).subscribe(
        (product: Product) => {
          this.selectedProduct = product;
          console.log(product)
        },
        (error: any) => {
          console.error('Error al obtener el producto:', error);
        }
      );
 
  }

  regresar(){

  }
  ingresar(){

  }
}
