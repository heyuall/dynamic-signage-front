import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { MessageDataService } from '../../../services/message-data.service';
@Component({
  selector: 'ngx-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [

    trigger('messages', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class MessageComponent implements OnInit {
  messageCount: number;
  btnText: string = 'Ajouter';
  messageText: string; 
  messages = [];


  constructor( private _data: MessageDataService,private router: Router) {  }

  sendMeHome() {
    this.router.navigate(['']);
  }
  ngOnInit() {
   
    
    this._data.message.subscribe(res => this.messages = res);
    this.messageCount = this.messages.length;
    this._data.changeMessage(this.messages);
    
  }

  addItem() {
    this.messages.push(this.messageText);
    this.messageText = '';
    this.messageCount = this.messages.length;
    this._data.changeMessage(this.messages);
  
    
    console.log("after addItem: ", this.messages);
  }
  removeItem(i: number) {
    this.messages.splice(i, 1);
    this._data.changeMessage(this.messages);
    this.messageCount = this.messages.length;
    console.log("after remoeveItem: ", this.messages);
  }
}
