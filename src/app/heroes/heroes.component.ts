import { Component, OnInit } from '@angular/core';
import { Heroi } from '../mode/hero.model';
import { HEROIS } from '../ mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 herois = HEROIS;

 selectedHeroi: Heroi;

  constructor() { }

  ngOnInit() {
  }

  onSelect(heroi: Heroi): void {
    this.selectedHeroi = heroi;
  }

}
