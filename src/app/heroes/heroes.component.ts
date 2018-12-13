import { Component, OnInit } from '@angular/core';
import { Heroi } from '../mode/hero.model';
import { HeroService } from '../hero.service';


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

  add(nome: string): void {
    nome = nome.trim();

    if (!nome) {return; }
    this.heroService.addHeroi({nome} as Heroi)
      .subscribe(heroi => { this.herois.push(heroi); });
  }

}
