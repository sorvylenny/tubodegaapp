import { Injectable } from '@angular/core';
import { Product } from '../interfaces/store.interface';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  public getCartItems(): Product[] {
    return this.cartItemsSubject.getValue();
  }

  public addToCart(product: Product) {
    const items = this.getCartItems();
    items.push(product);
    this.cartItemsSubject.next(items);
  }

  public removeFromCart(product: Product) {
    const items = this.getCartItems();
    const index = items.findIndex(item => item.id === product.id);
    if (index >= 0) {
      items.splice(index, 1);
      this.cartItemsSubject.next(items);
    }
  }
}
