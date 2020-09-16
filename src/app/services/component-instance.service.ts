import { Injectable } from '@angular/core';
import {TemperatureComponent} from '../pages/components/temperature/temperature.component';
import {ProdLigne1Component} from '../pages/components/prod-ligne1/prod-ligne1.component';
import {ProdLigne2Component} from '../pages/components/prod-ligne2/prod-ligne2.component';
import {ProdLigne3Component} from '../pages/components/prod-ligne3/prod-ligne3.component';
@Injectable({
  providedIn: 'root'
})
export class ComponentInstanceService {
  componentInstances: Map<string, any> = new Map();

  constructor() {
    this.setComponent('temperature', TemperatureComponent);
    this.setComponent('prod1', ProdLigne1Component);
    this.setComponent('prod2', ProdLigne2Component);
    this.setComponent('prod3', ProdLigne3Component);
  }
  setComponent(name: string, component: any): void {
    this.componentInstances.set(name, component);
  }

  getComponent(name: string) {
    return this.componentInstances.get(name);
  }
}
