import { Component, OnInit } from '@angular/core';
import { Heroi } from '../mode/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  herois: Heroi[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
     this.getHerois();
  }

  getHerois(): void {
    this.heroService.getHerois().subscribe(herois => this.herois = herois.slice(1, 5));
  }

}
