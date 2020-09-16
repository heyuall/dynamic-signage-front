
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ComponentInstanceService } from '../../services/component-instance.service';


@Component({
  selector: 'ngx-main22',
  templateUrl: './main22.component.html',
  styleUrls: ['./main22.component.scss']
})
export class Main22Component implements OnInit {

  componentName: string;
  @ViewChild('mainContent', { read: ViewContainerRef, static: true }) mainContent: ViewContainerRef;
  @ViewChild('sect1', { read: ViewContainerRef, static: true }) sect1: ViewContainerRef;
  @ViewChild('sect2', { read: ViewContainerRef, static: true }) sect2: ViewContainerRef;
  @ViewChild('sect3', { read: ViewContainerRef, static: true }) sect3: ViewContainerRef;
 

  

  constructor(private componentInstance: ComponentInstanceService, private resolver: ComponentFactoryResolver) {
    const el = document.getElementById('nb-global-spinner');
    if (el) {
      el.style['display'] = 'none';
    }
   }

  ngOnInit(): void {
    this.loadComponent('temperature');
    this.loadComponent2('prod1');
    this.loadComponent3('prod2');
    this.loadComponent4('prod3')
  }
  loadComponent(name: string) {
    console.log('Function has been called', name);
    this.mainContent.clear();
    const component = this.componentInstance.getComponent(name);
    const componentFactory = this.resolver.resolveComponentFactory(component);
    this.mainContent.createComponent(componentFactory);
  }
  loadComponent2(name: string) {
    console.log('Function has been called', name);
    this.sect1.clear();
    const component = this.componentInstance.getComponent(name);
    const componentFactory = this.resolver.resolveComponentFactory(component);
    this.sect1.createComponent(componentFactory);
  }
  loadComponent3(name: string) {
    console.log('Function has been called', name);
    this.sect2.clear();
    const component = this.componentInstance.getComponent(name);
    const componentFactory = this.resolver.resolveComponentFactory(component);
    this.sect2.createComponent(componentFactory);
  }
  loadComponent4(name: string) {
    console.log('Function has been called', name);
    this.sect3.clear();
    const component = this.componentInstance.getComponent(name);
    const componentFactory = this.resolver.resolveComponentFactory(component);
    this.sect3.createComponent(componentFactory);
  }

}
