import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/store.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() products!: Product[];

  cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
  }
}
