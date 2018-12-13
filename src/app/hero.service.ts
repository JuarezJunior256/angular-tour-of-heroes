import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroi } from './mode/hero.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // URL para web api
  private heroisUrl = 'api/herois';

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  // metodo para buscar dados via http de uma web api
  getHerois(): Observable<Heroi[]> {

    return this.http.get<Heroi[]>(this.heroisUrl)
              .pipe(
                tap(_ => this.log('Herois Buscados')),
                catchError(this.handleError('getHerois', []))
              );
  }

  // metodo para buscar dados por id por uma web api
  getHeroi(id: number): Observable<Heroi> {
    const url = `${this.heroisUrl}/${id}`;

    return this.http.get<Heroi>(url).pipe(
      tap(_ => this.log(`Heroi Buscado id=${id}`)),
      catchError(this.handleError<Heroi>(`getHeroi id=${id}`))
    );
  }

  // metodo para fazer update na lista
  updateHeroi(heroi: Heroi): Observable<any> {
    return this.http.put(this.heroisUrl, heroi, httpOptions).pipe(
        tap(_ => this.log(`update hero id=${heroi.id}`)),
        catchError(this.handleError<any>('updateHeroi'))
    );
  }

  // metedo para adicinar na lista
  addHeroi(heroi: Heroi): Observable<Heroi> {
    return this.http.post<Heroi>(this.heroisUrl, heroi, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((heroi: Heroi) => this.log(`add heroi id=${heroi.id}`)),
      catchError(this.handleError<Heroi>('AddHeroi'))
    );
  }

  // metodo para excluir da lista
  deleteHeroi(heroi: Heroi | number): Observable<Heroi> {
     const id  = typeof heroi === 'number' ? heroi : heroi.id;
     const url = `${this.heroisUrl}/${id}`;

     return this.http.delete<Heroi>(url, httpOptions).pipe(
       tap(_ => this.log(`delete heroi id=${id}`)),
       catchError(this.handleError<Heroi>('DeleteHeroi'))
     );
  }

  // metodo para enviar mensagens para MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /*
  * Handle operação HTTP que falhou.
  * Deixe o aplicativo continuar.
  * @param operation - nome da operação que falhou
  * @param result - valor opcional para retornar como resultado observável
  * */

  private handleError<T> (operation = 'operation', restult?: T) {
    return (error: any): Observable<T> => {
        // enviar o erro para a infraestrutura de registro remoto
        console.error(error);

        // melhor trabalho de transformar erro para consumo do usuário
        this.log(`${operation} failed: ${error.message}`);

        // Deixe o aplicativo continuar executando retornando um resultado vazio.
        return of(restult as T);
    };
  }
}
