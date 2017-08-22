import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="jumbotron">Animal tracker - Angular 2</h1>
    <animal-list [childAnimalList] = "masterAnimalList" (clickSender) = "editAnimal($event)"></animal-list>
    <hr>

    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Wolf', 'toby', 2, 'meat', 'northwest', 5, 'male', 'playing', 'bears'),
    new Animal('bear', 'brian', 3, 'deer', 'southeast', 4, 'male', 'sleeping', 'finding food'),
    new Animal('bird', 'karen', 4, 'mice', 'north', 1, 'female', 'flying', 'snakes')
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
