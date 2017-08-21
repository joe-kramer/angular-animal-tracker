import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Animal tracker - Angualar 2</h1>
    <animal-list [childAnimalList] = "masterAnimalList" (clickSender) = "editAnimal($event)"></animal-list>
    <hr>

    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
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

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
