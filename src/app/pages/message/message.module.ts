import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message/message.component';
import {MessageDataService} from '../../services/message-data.service';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessageRoutingModule,
    FormsModule
  ],providers: [
       MessageDataService
  ],
})
export class MessageModule { }
