import { Component,NgZone, OnInit, OnDestroy , Input, Output, EventEmitter,ElementRef, Renderer2 ,ChangeDetectorRef} from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import {InjiService} from './../../services/inji.service';
import { SelectComponent } from '../../select-Component.component';
import { Subscription ,Subject} from 'rxjs';

@Component({
  selector: 'app-button-view',
  templateUrl: './button-view.component.html'
})
export class ButtonViewComponent implements ViewCell, OnInit {
  constructor(
   private InjiService: InjiService,public zone: NgZone,private ref: ChangeDetectorRef
  ) {}

  renderValue: string;

  ngOnInit() {
    //this.renderValue = this.value.toString().toUpperCase();
    this.renderValue = "Components";
     this.InjiService.componentSubjects[this.rowData.componentName] = new Subject();
    this.InjiService.componentSubjects[this.rowData.componentName].subscribe(()=>{
      //debugger;
     
      this.InjiService.removeComponent(this.expanededComp);
      this.expanededComp = null;
      //this.renderValue = this.value.toString().toUpperCase(); //"Open";
      this.isOpen = false;
      //firing the change detection manually
      this.ref.markForCheck();    
    });
    //debugger;
  }

  @Input() value: string | number;
  @Input() rowData: any;

  isOpen:boolean = false;
  expanededComp:any = null;
  closestParent:any = null;

  onClick(event) {
    //debugger;
    console.log("toggle");
    if(this.isOpen){
      this.InjiService.removeComponent(this.expanededComp);
      this.expanededComp = null;
     // this.renderValue = this.value.toString().toUpperCase(); //"Open";
     this.renderValue = "Components";
      this.isOpen = false;
    }else{
      this.closestParent = event.target.closest("tr.ocean-st-row");
      this.expanededComp = this.InjiService.appendComponent(SelectComponent, this.rowData, this.closestParent);
      //this.renderValue = "Close";
      this.isOpen = true;
    }
  }
}