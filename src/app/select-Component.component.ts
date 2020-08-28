import { Component, Input, Output, EventEmitter } from '@angular/core';
import {InjiService} from './services/inji.service';
import { Subscription ,Subject} from 'rxjs';

//http://plnkr.co/edit/SVbMLQJSrZMkiwf5NKc8?p=preview

@Component({
  selector: 'td[sarmad]',
  template: `
  <nb-card>
  <nb-card-header>Select</nb-card-header>
  <nb-card-body>
    <nb-select selected="1">
      <nb-option value="1">Option 1</nb-option>
      <nb-option value="2">Option 2</nb-option>
    </nb-select>
  </nb-card-body>
</nb-card>
  `,
  host: {
      "[attr.colspan]": "3", 
      "(removeTheRow)": "ref"
   },
})

export class SelectComponent  {
  @Input() name: string;
   @Input() componentName: string;
  @Input() ref: any;
  @Output() onRemove = new EventEmitter<any>();
   

  test(){
    alert("HI: " + this.name);
  }

//@Output('removeTheRow') 
//closeRow = new EventEmitter<any>();
  close(ref:any){
    console.log("internal close");
    this.InjiService.removeComponent(ref);
   // debugger;
    this.InjiService.componentSubjects[this.componentName].next("value emitted from "+ref.componentName)
   // debugger;
    //this.closeRow.emit();
    //this.onRemove.emit(this.ref);
  }

  constructor(
    private InjiService: InjiService
  ) {}
}
