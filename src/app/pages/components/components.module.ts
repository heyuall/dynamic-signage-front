import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components/components.component';

import { NgxGaugeModule } from 'ngx-gauge';
import { NbCardModule } from '@nebular/theme';
import { GaugeChartModule } from 'angular-gauge-chart'
import { ThemeModule } from '../../@theme/theme.module';
import { ChartsModule} from '../charts/charts.module';
import { TemperatureComponent } from './temperature/temperature.component';
import { ProdLigne1Component } from './prod-ligne1/prod-ligne1.component';
import { ProdLigne2Component } from './prod-ligne2/prod-ligne2.component';
import { ProdLigne3Component } from './prod-ligne3/prod-ligne3.component';
@NgModule({
  declarations: [ComponentsComponent, TemperatureComponent, ProdLigne1Component, ProdLigne2Component, ProdLigne3Component],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgxGaugeModule,
    NbCardModule,
    ThemeModule,
    ChartsModule,
    GaugeChartModule
  ],
  exports: [ComponentsComponent,
  TemperatureComponent]
})
export class ComponentsModule { }
