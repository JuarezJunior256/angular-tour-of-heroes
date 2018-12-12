import { Injectable } from '@angular/core';
import { Heroi } from './mode/hero.model';
import { Observable, of } from 'rxjs';
import { HEROIS } from './ mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // metodo para buscar dados de uma constante de array, simulando um json
  getHerois(): Observable<Heroi[]> {

    // mensagem é adiciona a classe de serviço de mensagem
    // para quando a página é carregada
    this.messageService.add('HeroService: buscando Herois');
     return of(HEROIS);
  }
}
