import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

import { Heroi } from '../mode/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() heroi: Heroi;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) { }

  ngOnInit() {
    this.getHeroi();
  }

  getHeroi(): void {
    // pegando dados do id e convertendo a url string em number
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroi(id)
       .subscribe(heroi => this.heroi = heroi);
  }

  // voltando para pagina principal
  goBack(): void {
    this.location.back();
  }

}
