"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal.model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterAnimalList = [
            new animal_model_1.Animal('Wolf', 'toby', 2, 'meat', 'northwest', 5, 'male', 'playing', 'bears'),
            new animal_model_1.Animal('bear', 'brian', 3, 'deer', 'southeast', 4, 'male', 'sleeping', 'finding food'),
            new animal_model_1.Animal('bird', 'karen', 4, 'mice', 'north', 1, 'female', 'flying', 'snakes')
        ];
        this.currentFocus = 'Angular Homework';
        this.selectedAnimal = null;
    }
    AppComponent.prototype.editAnimal = function (clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedAnimal = null;
    };
    AppComponent.prototype.addAnimal = function (newAnimalFromChild) {
        this.masterAnimalList.push(newAnimalFromChild);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n    <h1 class=\"jumbotron\">Animal tracker - Angular 2</h1>\n    <animal-list [childAnimalList] = \"masterAnimalList\" (clickSender) = \"editAnimal($event)\"></animal-list>\n    <hr>\n\n    <edit-animal [childSelectedAnimal]=\"selectedAnimal\" (doneButtonClickedSender)=\"finishedEditing()\"></edit-animal>\n\n    <new-animal (newAnimalSender)=\"addAnimal($event)\"></new-animal>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map