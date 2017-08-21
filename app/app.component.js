"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.currentFocus = 'Angular Homework';
        this.animals = [
            new Animal('SPECIES', 'NAME', 2, 'DIET', 'LOCATION', 5, 'SEX', 'LIKES', 'DISLIKES'),
            new Animal('2SPECIES', 'NAME', 2, 'DIET', 'LOCATION', 5, 'SEX', 'LIKES', 'DISLIKES'),
            new Animal('3SPECIES', 'NAME', 2, 'DIET', 'LOCATION', 5, 'SEX', 'LIKES', 'DISLIKES')
        ];
        this.selectedAnimal = this.animals[0];
    }
    AppComponent.prototype.editAnimal = function (clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n    <h1>To Do List</h1>\n    <h3>For Epicodus Angular Homework{{currentFocus}}</h3>\n    <ul>\n      <li *ngFor=\"let currentAnimal of animals\">{{currentAnimal.species}} - {{currentAnimal.age}} - {{currentAnimal.name}} <button (click)=\"editAnimal(currentAnimal)\">Edit</button></li>\n    </ul>\n    <hr>\n    <div>\n      <h3>Edit {{selectedAnimal.species}} - {{selectedAnimal.name}}</h3>\n      <label>Animals Name:</label>\n      <input [(ngModel)]=\"selectedAnimal.name\">\n      <label>Animals Age:</label>\n      <input [(ngModel)]=\"selectedAnimal.age\">\n      <label>Animals Caretakers::</label>\n      <input [(ngModel)]=\"selectedAnimal.caretakers\">\n    </div>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Animal = (function () {
    function Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes) {
        this.species = species;
        this.name = name;
        this.age = age;
        this.diet = diet;
        this.location = location;
        this.caretakers = caretakers;
        this.sex = sex;
        this.likes = likes;
        this.dislikes = dislikes;
    }
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=app.component.js.map