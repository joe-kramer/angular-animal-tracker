import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "agelimit",
  pure: false
})


export class AgeLimitPipe implements PipeTransform {
  transform(input: Animal[], desired) {
    var output: Animal[] = [];

    if(desired === "2below") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desired === "2plus") {
      for(var j = 0; j < input.length; j++) {
        if (input[j].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
