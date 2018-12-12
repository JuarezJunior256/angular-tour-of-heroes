import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Heroi } from './mode/hero.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService {

  createDb() {
      const herois = [
        { id: 11, nome: 'Super Man' },
        { id: 12, nome: 'Flash' },
        { id: 13, nome: 'Lanterna Verde' },
        { id: 14, nome: 'Aquaman' },
        { id: 15, nome: 'Batman' },
        { id: 16, nome: 'Arqueiro Verde' },
        { id: 17, nome: 'Mulher Maravilha' },
        { id: 18, nome: 'Ciborgue' },
        { id: 19, nome: 'Mulher Gavião' },
        { id: 20, nome: 'Jhon' }
      ];

      return {herois};
  }
  // Substitui o método genId para garantir que um herói sempre tenha um id.
  // Se o array heroes estiver vazio,
  // o método abaixo retorna o número inicial (11).
  // se o array heroes não estiver vazio, o método abaixo retorna o valor mais alto
  // id do herói + 1
  genId(herois: Heroi[]): number {
    return herois.length > 0 ? Math.max(...herois.map(heroi => heroi.id)) + 1 : 11;
  }
}
