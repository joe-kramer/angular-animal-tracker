import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="2plus">All animals age 2 and above</option>
    <option value="2below">All animals below age 2</option>
    <option value="all" selected="selected">All animals</option>
  </select>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | agelimit:filterByAge">{{currentAnimal.species}} - {{currentAnimal.age}} - {{currentAnimal.name}} <button (click)="editAnimalClicked(currentAnimal)">Edit</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editAnimalClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  filterByAge: string = "all";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
