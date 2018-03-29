import { Component } from '@angular/core';

@Component({
  selector: 'toggle-button',
  template: `<button (click)="toggleColor()" [ngStyle]="{ 'background-color': currentColor }">Toggle</button>`,
  styles: ['button { padding: 15px; border-radius: 8px; color: white;}']
})
export class ToggleButton {
  currentColor: string = '#0000ff';
  toggleColor() {
    this.currentColor = this.currentColor === '#0000ff' ? '#ff0000' : '#0000ff';
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
