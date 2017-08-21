import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}} - {{currentAnimal.age}} - {{currentAnimal.name}} <button (click)="editAnimal(currentAnimal)">Edit</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];



}
