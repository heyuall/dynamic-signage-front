import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessageDataService {

  private messages = new BehaviorSubject<any>(['Message 1', 'Message 2']);
  message = this.messages.asObservable();


  constructor() { }
 changeMessage(message: any[]) {
    this.messages.next(message);
  }
}
