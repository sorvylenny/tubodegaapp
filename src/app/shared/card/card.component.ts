import { Component, EventEmitter, Inject, InjectionToken, Input, Output } from '@angular/core';
import { Product } from '../../store/interfaces/store.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() imageUrl!: string;
  @Input() imageAlt!: string;
  @Input() content!: string;
  @Input() buttonText!: string;

  @Input() products!: Product[];

  @Output() buttonAction: EventEmitter<void> = new EventEmitter(); // Acción del botón

 
}
