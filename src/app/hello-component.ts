import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: `app-hello`,
  template: `
    <h1>Hello works in {{ name }}</h1>
    <button (click)="passOut()">passOut</button>
  `,
  styles: ['h1{color:red}']
})
export class HelloComponent {
  @Input() name;
  @Output() val = new EventEmitter<String>();

  passOut() {
    this.val.emit('I am fine');
  }
}
