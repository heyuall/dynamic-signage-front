import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components/components.component';

import { NgxGaugeModule } from 'ngx-gauge';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgxGaugeModule,
    NbCardModule,
    ThemeModule
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
