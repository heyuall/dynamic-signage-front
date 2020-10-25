import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ComponentDataService } from '../../../services/component-data.service';
import { MonitorService } from '../../../services/monitor.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'ngx-layoutchecklist',
  templateUrl: './layoutchecklist.component.html',
  styleUrls: ['./layoutchecklist.component.scss']
})
export class LayoutchecklistComponent implements OnInit {

  constructor(private service2: MonitorService,
    private service: ComponentDataService,
    private ref: NbDialogRef<LayoutchecklistComponent>) { }


  maxSelection : number;
  data = [];

  d;
  selction = [];
  selectionCount = 0;

  cancel() {
    this.ref.close();
  }
  toggle(checked, d) {
    console.log(this.data);
    d.selected = checked;
    if ((this.selectionCount == this.maxSelection) && (!checked)) {
      this.data.forEach(elt => {

        elt.disabled = false;

      })
    }
    if (checked) { this.selectionCount++; }
    else { this.selectionCount--; }

    if (this.selectionCount == this.maxSelection) {
      this.data.forEach(elt => {
        if (!elt.selected) {
          elt.disabled = true;
        }
      })
    }
  }

  submit(d) {
    console.log(this.data);
    for (let d of this.data) {
      if (d.selected) this.selction.push(d.id);
    }
    console.log(this.selction);
    this.ref.close(this.selction);
    this.service2.send2(this.selction);

  }
  ngOnInit() {
    
    this.service.getComponentList().subscribe(data => {
      
      this.service2.eventEmitterLayoutEvent.subscribe(lay => {
       switch(lay.data.main_dimension){
         case "2*2" : this.maxSelection  = 4;  break;
         case "1*2" : this.maxSelection  = 2;  break;
         case "2*3" : this.maxSelection  = 6;  break;
       }
       console.log("maxSelection  : ",this.maxSelection )
       
       lay.data.components.forEach(comp =>{
          data.forEach(elt=>{
            
            if(elt.id == comp.id){
              elt.selected = true;
            }
          });
        });
     
        
        setTimeout(() => { this.data = data;
          this.selectionCount = lay.data.components.length;
          if (this.selectionCount == this.maxSelection){
            this.data.forEach(elt => {
              if (!elt.selected) {
                elt.disabled = true;
              }
            })
          }
        }, 0);
       
      });
    });
  }

}
