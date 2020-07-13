import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ButtonViewComponent } from './button-view/button-view.component';

import { SelectComponent } from '../select-Component.component';
import { InjiService } from '../services/inji.service';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
     NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    HttpClientModule
    
  ],
  declarations: [
    PagesComponent,
    ButtonViewComponent,
    SelectComponent
  ],
  providers:       [ InjiService ],
  entryComponents: [ SelectComponent, ButtonViewComponent ]
})
export class PagesModule {
}
