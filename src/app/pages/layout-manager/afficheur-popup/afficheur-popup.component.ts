import {  OnInit } from '@angular/core';
import { Component, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LayoutchecklistComponent } from '../layoutchecklist/layoutchecklist.component';


@Component({
  selector: 'ngx-afficheur-popup',
  templateUrl: './afficheur-popup.component.html',
  styleUrls: ['./afficheur-popup.component.scss']
})
export class AfficheurPopupComponent  {

  d:string;

  constructor(private dialogService: NbDialogService) { }

  
  open3() {
    this.dialogService.open(LayoutchecklistComponent)
      .onClose.subscribe(d => this.d=d);
     
  }

}
