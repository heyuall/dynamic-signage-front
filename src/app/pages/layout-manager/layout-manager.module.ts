import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';


import { CommonModule } from '@angular/common';
import { LayoutManagerComponent } from './layout-manager/layout-manager.component';
import { TablesModule } from '../tables/tables.module';
import {LayoutManagerRoutingModule} from './layout-manager-routing.module';
// import {SmartTableComponent} from '../tables/smart-table/smart-table.component';


@NgModule({
  declarations: [LayoutManagerComponent],
  imports: [
    CommonModule,
    TablesModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    LayoutManagerRoutingModule
  ]
})
export class LayoutManagerModule { }
