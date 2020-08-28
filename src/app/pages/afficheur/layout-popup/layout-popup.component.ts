import {  OnInit } from '@angular/core';
import { Component, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

//import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';
import { DialogPromptComponent } from '../dialog-prompt/dialog-prompt.component';
@Component({
  selector: 'ngx-layout-popup',
  templateUrl: './layout-popup.component.html',
  styleUrls: ['./layout-popup.component.scss']
})
export class LayoutPopupComponent {

 
 d:string;

  constructor(private dialogService: NbDialogService) { }

  
  open3() {
    this.dialogService.open(DialogPromptComponent)
      .onClose.subscribe(d => this.d=d);
     
  }
}
