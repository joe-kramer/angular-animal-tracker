import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List</h1>
    <h3>For Epicodus Angular Homework{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let currentAnimal of animals">{{currentAnimal.species}} - {{currentAnimal.age}} - {{currentAnimal.name}} <button (click)="editAnimal(currentAnimal)">Edit</button></li>
    </ul>
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
  currentFocus: string = 'Angular Homework';
  animals: Animal[] = [
    new Animal('SPECIES', 'NAME', 2, 'DIET', 'LOCATION', 5, 'SEX', 'LIKES', 'DISLIKES'),
    new Animal('2SPECIES', 'NAME', 2, 'DIET', 'LOCATION', 5, 'SEX', 'LIKES', 'DISLIKES'),
    new Animal('3SPECIES', 'NAME', 2, 'DIET', 'LOCATION', 5, 'SEX', 'LIKES', 'DISLIKES')
  ];

  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}

export class Animal {
  constructor(public species: string,
    public name: string,
    public age: number,
    public diet: string,
    public location: string,
    public caretakers: number,
    public sex: string,
    public likes: string,
    public dislikes: string) { }
}
