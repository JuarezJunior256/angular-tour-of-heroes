import { Component, OnInit } from '@angular/core';
import { Heroi } from '../mode/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroi: Heroi = {
    id: 1,
    nome: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
