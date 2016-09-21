import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['app/heroes.component.css'],
  templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {
  hero: Hero = { id: 1, name: 'Windstorm' };
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    });
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {
      return;
    }
    this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    })
  }
}
