import { Injectable } from '@angular/core';
import { Heroi } from './mode/hero.model';
import { Observable, of } from 'rxjs';
import { HEROIS } from './ mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHerois(): Observable<Heroi[]> {
     return of(HEROIS);
  }
}
