import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() search: EventEmitter<string>;
  protected searchValue: string;
  constructor() {
    this.searchValue = '';
    this.search = new EventEmitter<string>();
  }
  clearInput() {
    throw new Error('Method not implemented.');
  }
  value = 'Clear me';

  onSearch(): void {
    this.search.emit(this.searchValue);
  }
}
