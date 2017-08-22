"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimalListComponent = (function () {
    function AnimalListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.filterByAge = "all";
    }
    AnimalListComponent.prototype.editAnimalClicked = function (animalToEdit) {
        this.clickSender.emit(animalToEdit);
    };
    AnimalListComponent.prototype.onChange = function (optionFromMenu) {
        this.filterByAge = optionFromMenu;
    };
    return AnimalListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AnimalListComponent.prototype, "childAnimalList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalListComponent.prototype, "clickSender", void 0);
AnimalListComponent = __decorate([
    core_1.Component({
        selector: 'animal-list',
        template: "\n  <select (change)=\"onChange($event.target.value)\">\n    <option value=\"2plus\">All animals age 2 and above</option>\n    <option value=\"2below\">All animals below age 2</option>\n    <option value=\"all\" selected=\"selected\">All animals</option>\n  </select>\n  <ul>\n    <li *ngFor=\"let currentAnimal of childAnimalList | agelimit:filterByAge\"><span class=\"liLabel\">Species:</span> {{currentAnimal.species}}<br>\n    <span class=\"liLabel\">Name:</span> {{currentAnimal.age}}<br>\n    <span class=\"liLabel\">Age:</span> {{currentAnimal.name}}<br>\n    <span class=\"liLabel\">Diet:</span> {{currentAnimal.diet}}<br>\n    <span class=\"liLabel\">Location:</span> {{currentAnimal.location}}<br>\n    <span class=\"liLabel\">Caretakers:</span> {{currentAnimal.caretakers}}<br>\n    <span class=\"liLabel\">Sex:</span> {{currentAnimal.sex}}<br>\n    <span class=\"liLabel\">Likes:</span> {{currentAnimal.likes}}<br>\n    <span class=\"liLabel\">Dislikes:</span> {{currentAnimal.dislikes}}<br>\n    <button (click)=\"editAnimalClicked(currentAnimal)\">Edit</button><hr></li>\n  </ul>\n  "
    })
], AnimalListComponent);
exports.AnimalListComponent = AnimalListComponent;
//# sourceMappingURL=animal-list.component.js.map