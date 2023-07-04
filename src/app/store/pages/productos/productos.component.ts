import { Component } from '@angular/core';
import { Product } from '../../interfaces/store.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
      description: 'Descripción del producto 1',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 200,
      description: 'Descripción del producto 2',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 300,
      description: 'Descripción del producto 3',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'Producto 4',
      price: 100,
      description: 'Descripción del producto 1',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 200,
      description: 'Descripción del producto 2',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      name: 'Producto 6',
      price: 300,
      description: 'Descripción del producto 3',
      image: 'https://via.placeholder.com/150'
    },

  ];
  cartItems: Product[] = [];
  addToCart(product: Product) {
    this.cartItems.push(product);
  }
}
