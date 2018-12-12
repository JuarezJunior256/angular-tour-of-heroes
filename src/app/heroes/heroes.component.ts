import { Component, OnInit } from '@angular/core';
import { Heroi } from '../mode/hero.model';
import { HeroService } from '../hero.service';
import { HEROIS } from '../ mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 herois: Heroi[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {

    this.getHerois();
  }

  getHerois(): void {
    this.heroService.getHerois()
       .subscribe(herois => this.herois = herois);
  }

}
