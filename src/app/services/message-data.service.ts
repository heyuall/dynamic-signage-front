import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessageDataService {

  // private messages = new BehaviorSubject<any>(['Message 1', 'Message 2']);
  // message = this.messages.asObservable();
  // messages : any[];
  private url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }
 
  // changeMessage(message: any[]) {
  //   this.messages.next(message);
  // }

  getMessages(){
    return this.http.get(`${this.url}`+'Message/all');
  }
  updateMessages(messages : any[]){
return this.http.post(`${this.url}`+'Message/update',{"data" : [...messages]});
 
  }
}
