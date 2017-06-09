import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { StoryAppComponent } from './solution/story-app.component';
import { CharacterComponent } from './solution/character.component';
import { CharacterSolvedComponent } from './solution/character-solved.component';
import { StoryComponent } from './story/story.component';
import { StoryService } from './story/story.service';
import { HeroesComponent } from './form/heroes.component';
import { HeroFormComponent } from './form/hero.component';
import { DashboardComponent } from './form/app.dashboard.component';
import { HeroDetailComponent } from './form/hero-detail.component';
import { HeroSearchComponent } from './form/hero-search.component';
import { AppRoutingModule } from './app.routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './form/app.component';
import { HeroService } from './form/hero-service';
import { LoggerService, BetterLoggerService } from './logger.service';
// import { ConfigService } from './services/config.service'
// import { AdalService } from './services/adal.service'
// import { AuthenticationGuard } from './services/canactive.service'


@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [StoryComponent, StoryAppComponent, CharacterComponent, CharacterSolvedComponent, HeroFormComponent, HeroesComponent, DashboardComponent, HeroDetailComponent, HeroSearchComponent, AppComponent ],
  providers : [StoryService, HeroService, [{ provide: LoggerService, useClass: BetterLoggerService }]],
  bootstrap: [AppComponent],
})
export class AppModule { }

  
