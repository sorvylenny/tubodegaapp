import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() items: any[] = [];
  @Input() dataSource: any;
  @Output() filterChanged = new EventEmitter<string>();
  @Input() searchControl = new FormControl();
  @Input() filteredItems: any[] =[];
 
  applyFilter() {
    this.filterChanged.emit(this.searchControl.value);
  }
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.filterChanged.emit(event.option.value);
  }


}
