import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'story-app',
   templateUrl: './story-app.component.html',  
})
export class StoryAppComponent {
  buttonText = 'Switch to Solution';
  showSolution = false;

  solve() {
    this.showSolution = !this.showSolution;
    this.buttonText = this.showSolution ? 'Switch to  Starter' : 'Switch to Solution';
  }
}
