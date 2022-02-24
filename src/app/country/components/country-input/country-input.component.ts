import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
// import {} from 'stream';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
})
export class CountryInputComponent implements OnInit {
  termino: string = '';
  @Input() placeHolder: string = ''
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  constructor() {}

  ngOnInit() {


    // lo que hace este pipe es no emitir el suscribe hasta que el 
    // observable no deje de emitir valores por los proximos 300 ms

    this.debouncer
    .pipe(debounceTime(300))
    .subscribe((value) => {
      this.onDebounce.emit(value)
    });
  }

  search() {
    if (this.termino.trim().length === 0) {
      this.termino = '';
      return;
    }
    this.onEnter.emit(this.termino);
    this.termino = '';
  }
  onPressKey() {
    this.debouncer.next(this.termino);
  }
}
