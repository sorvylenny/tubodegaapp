import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() dataSource: any;
  @Output() filterChanged = new EventEmitter<string>();
  filterValue = '';

  handleFilterChanged(filterValue: string) {
/*     const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
    this.filterChanged.emit(filterValue);
  }

}
