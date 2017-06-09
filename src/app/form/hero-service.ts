import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs'
import { LoggerService, BetterLoggerService } from '../logger.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  constructor(private logger: LoggerService, private http: Http) {  }

  private heroesUrl = 'api/heroes2';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

getHeroes(): Promise<Hero[]> {
  return this.http
    .get(this.heroesUrl)
    .toPromise()
    .then(response => response.json().data as Hero[])
    .catch(this.handleError); }

//Werkt ook
//  getHero(id: number): Promise<Hero> {
//    this.logger.log(`Getting hero with id ${id} ...`);
//    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id)); }

getHero(id: number): Promise<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http
    .get(url)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError); }

update(hero: Hero): Promise<Hero> {
  return this.http
    .put(`${this.heroesUrl}/${hero.id}`, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError); }

create(name: string): Promise<Hero> {
  return this.http
    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Hero)
    .catch(this.handleError); }

delete(id: number): Promise<void> {  
  return this.http.delete(`${this.heroesUrl}/${id}`, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError); }

private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error); }
}

 
 
  
