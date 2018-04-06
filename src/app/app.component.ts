import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Simone';
  elements: number[] = [];

  // metodo al click Cambia nome
  onChangeName() {
    this.name = 'Max';
  }
  // metodo al click Nuovo elemento
  onAddElement() {
    this.elements.push(this.elements.length + 1);
  }
  // metodo per il recupero della classe
  getColor(element) {
    return element % 2 === 0 ? 'green' : 'red';
  }
}
