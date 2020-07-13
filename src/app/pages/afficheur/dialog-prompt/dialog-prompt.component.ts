import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-prompt',
  templateUrl: './dialog-prompt.component.html',
  styleUrls: ['./dialog-prompt.component.scss']
})
export class DialogPromptComponent {

  constructor( private ref: NbDialogRef<DialogPromptComponent>) {}

 
  
  data = [
    {
      id: 1,
      name: "Layout1",
      main: "2x2",
      aside: true,
      footer: true,
    },
    {
      id: 2,
      name: "Layout2",
      main: "1x2",
      aside: true,
      footer: true,
    },
    {
      id: 3,
      name: "Layout3",
      main: "2x3",
      aside: false,
      footer: false,
    }
  ];

  d ;

  cancel() {
    this.ref.close();
  }

  submit(d) {
    this.ref.close(d);
   
  }
}
