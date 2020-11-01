import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { MonitorService } from '../../../services/monitor.service';

@Component({
  selector: 'ngx-dialog-prompt',
  templateUrl: './dialog-prompt.component.html',
  styleUrls: ['./dialog-prompt.component.scss']
})
export class DialogPromptComponent implements OnInit {

  constructor(private ref: NbDialogRef<DialogPromptComponent>,
    private service: MonitorService) { }



  data: any;


  d;
  ngOnInit() {
    this.service.getLayoutList().subscribe((res:any) => {
      
  
    this.service.getMonitorList().subscribe((monitorList: any) => {
      monitorList.forEach(element => {
       res.forEach(element2 => {
          if(element2.layoutGrid == element.layoutGrid){
            element2.selected = true; 
          }
        });
         
      });
    })
    setTimeout(() => { this.data = res;},0);
    

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
