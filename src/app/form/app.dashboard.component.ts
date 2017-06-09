import { Component } from '@angular/core';
import { Hero }    from './hero';
import { HeroService } from './hero-service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app.dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
  heroes:Hero[];
  submitted:boolean = false;
 
  constructor(private heroService: HeroService, private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5)); }
 }
