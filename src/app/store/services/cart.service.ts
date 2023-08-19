import { Injectable } from '@angular/core';
import { Product } from '../interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  productosEnCarrito: Product[] = [];

  agregarAlCarrito(producto: Product): void {
    this.productosEnCarrito.push(producto);
  }

  eliminarDelCarrito(producto: Product): void {
    const index = this.productosEnCarrito.indexOf(producto);
    if (index >= 0) {
      this.productosEnCarrito.splice(index, 1);
    }
  }
}
