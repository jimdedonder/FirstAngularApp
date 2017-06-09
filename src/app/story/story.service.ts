import { Injectable } from '@angular/core';

@Injectable()
export class StoryService {
  getStories = () => [
    { id: 1, name: 'Harry Potter' },
    { id: 2, name: 'X_Files' },
    { id: 3, name: 'Carrie' }
  ];
}