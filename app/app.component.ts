import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List</h1>
    <h3>For Epicodus Angular Homework</h3>

    <animal-list [childAnimalList] = "masterAnimalList"></animal-list>

    <hr>
    <div *ngIf="selectedAnimal">
      <h3>Edit {{selectedAnimal.species}} - {{selectedAnimal.name}}</h3>
      <label>Animals Name:</label>
      <input [(ngModel)]="selectedAnimal.name">
      <label>Animals Age:</label>
      <input [(ngModel)]="selectedAnimal.age">
      <label>Animals Caretakers::</label>
      <input [(ngModel)]="selectedAnimal.caretakers">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('SPECIES', 'NAME', 2, 'DIET', 'LOCATION', 5, 'SEX', 'LIKES', 'DISLIKES'),
    new Animal('2SPECIES', 'NAME', 2, 'DIET', 'LOCATION', 5, 'SEX', 'LIKES', 'DISLIKES'),
    new Animal('3SPECIES', 'NAME', 2, 'DIET', 'LOCATION', 5, 'SEX', 'LIKES', 'DISLIKES')
  ];

  currentFocus: string = 'Angular Homework';

  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}
