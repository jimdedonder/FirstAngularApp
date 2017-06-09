import { Component } from '@angular/core';
import { StoryService } from './story.service';

@Component({
  moduleId: module.id,
  selector: 'story',
  templateUrl: './story.component.html',
})
export class StoryComponent {
  stories = this.storyService.getStories();
  story = { id: 100, name: 'The stand' };
  color = 'blue';
  values = '';
  values2 = '';
  isActive = true;

  constructor(private storyService: StoryService) { }
  
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  
  onKey2(value: string) {
    this.values2 += value + ' | ';
  }
}
