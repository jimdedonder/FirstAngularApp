import { Component } from '@angular/core';

class Character {
  constructor(public id: number, public name: string, public side: string, public imageUrl: string, public link: string) { }
}

@Component({
  moduleId: module.id,
  selector: 'story-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  character: Character;
  color = '';
  msg = 'empty';

  constructor() {
    this.character = new Character(100, 'Boba Fett', 'dark', 'assets/man.png', 'http://angular.io');
  }

  select() {
    //this.msg = `You selected ${this.msg}`;
    console.log(this.msg);
  }
}
