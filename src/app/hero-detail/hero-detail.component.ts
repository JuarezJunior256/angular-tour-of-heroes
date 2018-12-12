import { Component, OnInit, Input } from '@angular/core';
import { Heroi } from '../mode/hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() heroi: Heroi;

  constructor() { }

  ngOnInit() {
  }

}
