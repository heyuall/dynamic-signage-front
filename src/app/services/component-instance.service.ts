import { Injectable } from '@angular/core';
import {TemperatureComponent} from '../pages/components/temperature/temperature.component';
import {ProdLigne1Component} from '../pages/components/prod-ligne1/prod-ligne1.component';
import {ProdLigne2Component} from '../pages/components/prod-ligne2/prod-ligne2.component';
import {ProdLigne3Component} from '../pages/components/prod-ligne3/prod-ligne3.component';
import{ChartjsPieComponent} from '../pages/charts/chartjs/chartjs-pie.component';
import{ChartjsBarComponent} from '../pages/charts/chartjs/chartjs-bar.component';
@Injectable({
  providedIn: 'root'
})
export class ComponentInstanceService {
  componentInstances: Map<string, any> = new Map();

  constructor() {
    this.setComponent('Temperature', TemperatureComponent);
    this.setComponent('Production Ligne 1', ProdLigne1Component);
    this.setComponent('Production Ligne 2', ProdLigne2Component);
    this.setComponent('Production Ligne 3', ProdLigne3Component);
    this.setComponent('Production Atelier', ChartjsPieComponent);
    this.setComponent('Production Ligne1 par semaine',ChartjsBarComponent);
  }
  setComponent(name: string, component: any): void {
    this.componentInstances.set(name, component);
  }

  getComponent(name: string) {
    return this.componentInstances.get(name);
  }
}
