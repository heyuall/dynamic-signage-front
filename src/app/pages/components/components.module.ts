import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components/components.component';

import { NgxGaugeModule } from 'ngx-gauge';
import { NbCardModule } from '@nebular/theme';
import { GaugeChartModule } from 'angular-gauge-chart'
import { ThemeModule } from '../../@theme/theme.module';
import { ChartsModule} from '../charts/charts.module';
@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgxGaugeModule,
    NbCardModule,
    ThemeModule,
    ChartsModule,
    GaugeChartModule
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
