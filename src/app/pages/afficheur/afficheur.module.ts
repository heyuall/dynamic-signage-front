

import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';


import { CommonModule } from '@angular/common';

import { AfficheurRoutingModule } from './afficheur-routing.module';
import { AfficheurComponent } from './afficheur/afficheur.component';


@NgModule({
  declarations: [AfficheurComponent],
  imports: [
    CommonModule,
    AfficheurRoutingModule,
    NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,
    ThemeModule,
    Ng2SmartTableModule 
  ]
})
export class AfficheurModule { }
