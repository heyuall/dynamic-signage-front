import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';


import { CommonModule } from '@angular/common';
import { LayoutManagerComponent } from './layout-manager/layout-manager.component';
import { TablesModule } from '../tables/tables.module';
import {LayoutManagerRoutingModule} from './layout-manager-routing.module';
import { AfficheurPopupComponent } from './afficheur-popup/afficheur-popup.component';
import { LayoutchecklistComponent } from './layoutchecklist/layoutchecklist.component';

// import {SmartTableComponent} from '../tables/smart-table/smart-table.component';

// import { ButtonViewComponent } from '../button-view/button-view.component';
// import { HelloComponent } from '../../hello.component';
// import { InjiService } from '../../services/inji.service';
@NgModule({
  declarations: [LayoutManagerComponent, AfficheurPopupComponent, LayoutchecklistComponent],
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
  // ,providers:       [ InjiService ],
  // entryComponents: [ HelloComponent, ButtonViewComponent ]
})
export class LayoutManagerModule { }
