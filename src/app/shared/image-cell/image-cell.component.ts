import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-cell',
  templateUrl: './image-cell.component.html',
  styleUrls: ['./image-cell.component.css']
})
export class ImageCellComponent {
  @Input() imageUrls: string[] = [];

  getImageUrl(urls: string[]): string {
    if (urls && urls.length > 0) {
      const firstImageUrl = urls[0];
      return firstImageUrl;
    }
    return ''; // Otra URL de imagen por defecto si es necesario
  }
  
}
