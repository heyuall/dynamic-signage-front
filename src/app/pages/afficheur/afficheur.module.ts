

import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';


import { CommonModule } from '@angular/common';

import { AfficheurRoutingModule } from './afficheur-routing.module';
import { AfficheurComponent } from './afficheur/afficheur.component';
import { LayoutPopupComponent } from './layout-popup/layout-popup.component';
import { DialogPromptComponent } from './dialog-prompt/dialog-prompt.component';
import {
  NbButtonModule,

  NbCheckboxModule,
  NbDialogModule,
  NbRadioModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';


// modules



@NgModule({
  declarations: [AfficheurComponent, LayoutPopupComponent, DialogPromptComponent],
  imports: [
    CommonModule,
    AfficheurRoutingModule,
    NbCardModule,
     NbIconModule, NbInputModule, NbTreeGridModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbRadioModule,
    NbCheckboxModule,
    NbDialogModule,
    FormsModule,
    NbPopoverModule,
    NbSelectModule,
    NbTabsetModule,
    NbTooltipModule,
    NbWindowModule,
  ]
})
export class AfficheurModule { }
