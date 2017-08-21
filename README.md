# angular-animal-tracker

This program is for someone like a park ranger to keep track of animals on their watch list. This is a first look into the js framework angular 2.

## Planning

1. Configuration/dependencies
  * You will need to have node.js downloaded.
  * Run a "bower install" and "npm install" after cloning repository
  * Run "gulp build" and "gulp serve" to see project on localhost:3000

2. Specs
  * Spec 1: Need to log an animal, input: new animal, output: display on index page
  * Spec 2: Need to update animals caretakers, name, or age, input: animal, output: updated animal information.
  * Spec 3: Need to filter animals by age, input: show all animals <2, output: all animals less than age 2

3. Integration
  * app.Component.ts contains all other Components
  * AnimalListComponent contains our list of animals with edit buttons, which actions get mapped back to app.Component.ts
  * EditAnimalComponent takes control of editing our animals, and pushing that information back to our app.Component
  * New-animal Component is created as a form, which pushes the new animal object into the master list on app.Component.ts

4. UX/UI
  * Built with bootstrap

5. Polish
  * Make form info disappear 
  * Add stylesheet
  * Add delete method
  * Make README awesome
