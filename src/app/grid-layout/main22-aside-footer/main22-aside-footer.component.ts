import { Component, OnInit } from '@angular/core';
import { MessageDataService } from '../../services/message-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MonitorService } from '../../services/monitor.service';
import {  ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ComponentInstanceService } from '../../services/component-instance.service';


@Component({
  selector: 'ngx-main22-aside-footer',
  templateUrl: './main22-aside-footer.component.html',
  styleUrls: ['./main22-aside-footer.component.scss']
})
export class Main22AsideFooterComponent implements OnInit {

  componentName: string;
  @ViewChild('mainContent', { read: ViewContainerRef, static: true }) mainContent: ViewContainerRef;
  @ViewChild('sect1', { read: ViewContainerRef, static: true }) sect1: ViewContainerRef;
  @ViewChild('sect2', { read: ViewContainerRef, static: true }) sect2: ViewContainerRef;
  @ViewChild('sect3', { read: ViewContainerRef, static: true }) sect3: ViewContainerRef;
 

  value: string = "flash";
  messages: any;

  /////////////notifsDatas//////////
  Ligne1: { ligne: string, value: string }[] = [
    { ligne: 'Ligne 1', value: 'Arrêt Planifié' },
    { ligne: 'Ligne 1', value: 'Blockage' },
    { ligne: 'Ligne 1', value: 'En progression' },
    { ligne: 'Ligne 1', value: 'Fin série1' },
   
  ];
  Ligne2: { ligne: string, value: string }[] = [
    { ligne: 'Ligne 2', value: 'En progression' },
    { ligne: 'Ligne 2', value: 'Arrêt Planifié' },
    { ligne: 'Ligne 2', value: 'Blockage' },
     { ligne: 'Ligne 2', value: 'Fin série2' },
   
  ];
  Ligne3: { ligne: string, value: string }[] = [
    { ligne: 'Ligne 3', value: 'Arrêt Planifié' },
    { ligne: 'Ligne 3', value: 'En progression' },
    { ligne: 'Ligne 3', value: 'Fin série3' },
    { ligne: 'Ligne 3', value: 'Blockage' },
   
  ];

  /////////////////////////
  reference: any;
  data: any[];
  layout: any;
  components : any[];
  notifs :any;
  constructor(private componentInstance: ComponentInstanceService, private resolver: ComponentFactoryResolver, private monitorService: MonitorService, private _data: MessageDataService, private route: ActivatedRoute, private router: Router) {

    const el = document.getElementById('nb-global-spinner');
    if (el) {
      el.style['display'] = 'none';
    }
  }

  ngOnInit() {

    this._data.getMessages().subscribe(res => this.messages = res[0].data);

    /////////Verfy Localstorage/////////
    this.reference = localStorage.getItem('reference');
    console.log(this.reference);

    //////////////getMonitorByLocalStorage/////////
    this.monitorService.getMonitorList().subscribe(monitors => {
      this.data = monitors;
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].afficheurReference == this.reference) {
          this.layout = this.data[i].layoutGrid;
          console.log(this.layout);
          this.components = [...(this.layout.components)]
          console.log(this.components);
          console.log(this.components[0].title);
          ///////////////////loadingcomponents//////////
          this.loadComponent(''+this.components[0].title);
          this.loadComponent2(''+this.components[1].title);
          this.loadComponent3(''+this.components[2].title);
          this.loadComponent4(''+this.components[3].title)
          ////////////////loadingNotifications/////////
          if(this.layout.aside == "Ligne 1"){
            this.notifs = this.Ligne1;
            console.log('AAAAAAAAAAAA'+this.notifs[1].ligne);
          }else if(this.layout.aside == "Ligne 2"){
            this.notifs= this.Ligne2;
            console.log('AAAAAAAAAAAA'+this.notifs[1].ligne);
          }else{
            this.notifs= this.Ligne3;
            console.log('AAAAAAAAAAAA'+this.notifs[1].ligne);
          }
        }
      }
    });
   
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
