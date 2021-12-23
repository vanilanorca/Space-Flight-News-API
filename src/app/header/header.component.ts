import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  panelOpenState = false;
  textSearch: string = '';
  selected: string = 'recent'

  @Output() searchEvent = new EventEmitter<string>();
  @Output() sortEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  pesquisar() {
    this.searchEvent.emit(this.textSearch);
  }

  sort(value: string){
    this.sortEvent.emit(value);
  }

}
