import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Heroi } from '../mode/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  herois$: Observable<Heroi[]>;

  private buscarTerms = new Subject<string>();


  constructor(private heroiService: HeroService) { }

  // Escreva um termo de pesquisa para o fluxo observável.
  buscar(term: string): void {
    this.buscarTerms.next(term);
  }

  ngOnInit(): void {

    this.herois$ = this.buscarTerms.pipe(
      // aguarde 300ms após cada pressionamento de tecla antes de considerar o termo
      debounceTime(300),

      // ignorar novo termo se igual ao termo anterior
      distinctUntilChanged(),

      // mudar para nova pesquisa observável cada vez que o termo muda
      switchMap((term: string) => this.heroiService.buscarHerois(term))
    );
  }

}
