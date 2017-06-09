import { Component } from '@angular/core';

import { Hero }    from './hero';
import { HeroService } from './hero-service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  providers: [HeroService],
   styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  id: number=21;
  heroes:Hero[];
  model:Hero = new Hero(this.id, '', '', '', false);;
  submitted:boolean = false;
  
  constructor(private heroService: HeroService, private loggerService: LoggerService) { }

  ngOnInit()
  {
     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSubmit() { 
    this.loggerService.log('Submitting new Hero');
    this.heroes.push(new Hero(this.id, this.model.name, this.model.power, this.model.alterEgo, this.model.isSecret)) }

  newHero() { 
    this.loggerService.log('Adding new Hero');
    this.model = new Hero(this.id+=1, '', '', '', false); }

  // TODO: Remove this when we're done
  get diagnostics() { return JSON.stringify(this.model); }
}
