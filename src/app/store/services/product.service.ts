import { Injectable } from '@angular/core';
import { Product } from '../interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Producto 1', price: 100, description: 'Descripción del producto 1', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2', price: 200, description: 'Descripción del producto 2', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Producto 3', price: 300, description: 'Descripción del producto 3', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Producto 4', price: 400, description: 'Descripción del producto 4', image: 'https://via.placeholder.com/150' }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  searchProducts(term: string): Product[] {
    if (!term.trim()) {
      return this.products;
    }
    return this.products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );

}
}
