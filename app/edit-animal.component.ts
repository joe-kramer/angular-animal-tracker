import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>Edit {{childSelectedAnimal.species}} - {{childSelectedAnimal.name}}</h3>
      <label>Animals Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Animals Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <label>Animals Caretakers::</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
