import { Component, EventEmitter, Inject, InjectionToken, Input, Output } from '@angular/core';
import { Product } from '../../store/interfaces/store.interface';
import { User } from 'src/app/admin/interface/user';


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
  @Input() buttonText1!: string;
  @Input() buttonText2!: string;
  @Input() icon1!: string;
  @Input() icon2!: string;
  @Input() products!: Product;

  @Input() user!: User; // Asumiendo que el tipo User representa los datos del usuario
  
  getImageUrlsArray(): string[] {
    return this.imageUrl.split(',');
  }


  @Output() buttonAction: EventEmitter<void> = new EventEmitter(); // Acción del botón

 
}
