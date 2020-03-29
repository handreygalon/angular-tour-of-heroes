import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES; // Property called heroes to expose the HEROES array for binding
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
    /* Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic. */
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
