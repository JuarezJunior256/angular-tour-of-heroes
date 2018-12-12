import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  // metodo que adiciona uma mensagem no array de string
  add(message: string) {
    this.messages.push(message);
  }

  // metodo para limpar array de string
  clear() {
    this.messages = [];
  }


}
