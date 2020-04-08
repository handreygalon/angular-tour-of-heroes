import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]; // Property called heroes to expose the HEROES array for binding

  /*
  Reserve the constructor for simple initialization such as wiring constructor parameters
  to properties. The constructor shouldn't do anything. It certainly shouldn't call a function
  that makes HTTP requests to a remote server as a real data service would.
  */
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    /*
    Angular calls ngOnInit() shortly after creating a component. It's a good place to put
    initialization logic.
    */
   this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
