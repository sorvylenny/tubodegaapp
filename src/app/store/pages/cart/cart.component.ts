import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/store.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems$: Observable<Product[]> | undefined;

  constructor(/* private cartService: CartService */) { }

  ngOnInit(): void {
/*     this.cartItems$ = this.cartService.cartItems$; */
  }

 /*  public removeItem(product: Product) {
    this.cartService.removeFromCart(product);
  } */
}
