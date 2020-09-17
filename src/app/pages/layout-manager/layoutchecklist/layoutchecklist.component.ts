import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {ComponentDataService} from '../../../services/component-data.service';
import { MonitorService } from '../../../services/monitor.service';
@Component({
  selector: 'ngx-layoutchecklist',
  templateUrl: './layoutchecklist.component.html',
  styleUrls: ['./layoutchecklist.component.scss']
})
export class LayoutchecklistComponent  implements OnInit{

  constructor(private service2: MonitorService,
    private service:ComponentDataService,
     private ref: NbDialogRef<LayoutchecklistComponent>) {}

 
  
  data =[];

  d ;
  selction=[];

  cancel() {
    this.ref.close();
  }

  submit(d) {
    console.log(this.data);
    for (let d of this.data){
      if (d.selected) this.selction.push(d.id);
    }
    console.log(this.selction);
    this.ref.close(this.selction);
    this.service2.send2(this.selction);
    
  }
  ngOnInit(){
   this.service.getComponentList().subscribe(res=>{
     this.data= res;
     this.data.forEach(e => {e.selected = false;});
   });
  }

}
