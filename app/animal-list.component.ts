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
    <li *ngFor="let currentAnimal of childAnimalList | agelimit:filterByAge"><span class="liLabel">Species:</span> {{currentAnimal.species}}<br>
    <span class="liLabel">Name:</span> {{currentAnimal.age}}<br>
    <span class="liLabel">Age:</span> {{currentAnimal.name}}<br>
    <span class="liLabel">Diet:</span> {{currentAnimal.diet}}<br>
    <span class="liLabel">Location:</span> {{currentAnimal.location}}<br>
    <span class="liLabel">Caretakers:</span> {{currentAnimal.caretakers}}<br>
    <span class="liLabel">Sex:</span> {{currentAnimal.sex}}<br>
    <span class="liLabel">Likes:</span> {{currentAnimal.likes}}<br>
    <span class="liLabel">Dislikes:</span> {{currentAnimal.dislikes}}<br>
    <button (click)="editAnimalClicked(currentAnimal)">Edit</button><hr></li>
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
