import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() title: string;
  @Output() eventClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  clickTitle(): void {
    this.eventClick.emit(this.title);
  }
}
