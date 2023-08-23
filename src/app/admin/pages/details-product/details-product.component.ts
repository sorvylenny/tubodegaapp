import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/store/interfaces/store.interface';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  selectedProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: ''

  }; 
  
  showSecondButton = true; // Cambia esto según tus necesidades

 
  productos: Product[] = [];

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const productId = Number(params.get('id')); // Convertir el parámetro 'id' a número (si es necesario)

     // Verificar si 'productos' existe y no es nulo antes de buscar el producto por su ID
      if (this.productos && this.productos.length > 0) {
      this.selectedProduct = this.productos.find((producto: { id: number; }) => producto.id === productId) || this.selectedProduct;
      }
    });
  
  }
  selectedData(product: Product) {
      this.selectedProduct = product;
  }

  regresar(){

  }
  ingresar(){

  }
}
