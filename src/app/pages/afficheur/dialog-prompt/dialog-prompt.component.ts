import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {MonitorService} from '../../../services/monitor.service';

@Component({
  selector: 'ngx-dialog-prompt',
  templateUrl: './dialog-prompt.component.html',
  styleUrls: ['./dialog-prompt.component.scss']
})
export class DialogPromptComponent implements OnInit {

  constructor( private ref: NbDialogRef<DialogPromptComponent>, private service: MonitorService) {}

 
  
  data : any;


  d ;
  ngOnInit() {
    this.service.getLayoutList().subscribe(res=>{
      this.data =res;
    });
  }

  cancel() {
    this.ref.close();
  }

  submit(d) {
    console.log(d);
    this.ref.close(d);
   this.service.send(d);
  }
}
