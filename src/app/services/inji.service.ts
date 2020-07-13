import { Injectable,Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
ApplicationRef, Renderer2, RendererFactory2  } from '@angular/core';
import { SelectComponent } from '../select-Component.component';
import { Observable, Subject } from 'rxjs';
import { ButtonViewComponent} from '../pages/button-view/button-view.component';

@Injectable()
export class InjiService {
public componentSubjects: { [name: string]: Subject<any> } = {};
renderer : Renderer2;

constructor(
  private componentFactoryResolver: ComponentFactoryResolver,
  private appRef: ApplicationRef,
  private injector: Injector,
  rendererFactory: RendererFactory2,
) {
  this.renderer = rendererFactory.createRenderer(null, null);
}

//render in injectable service https://stackoverflow.com/questions/44989666/service-no-provider-for-renderer2
appendComponent(component: any, data:any, selected:any) {

  // 1. Create a component reference from the component 
  const componentRef = this.componentFactoryResolver
    .resolveComponentFactory(component)
    .create(this.injector);
    //debugger;
   
    (<SelectComponent>componentRef.instance).name = data.name;
    (<SelectComponent>componentRef.instance).ref = componentRef;
      (<SelectComponent>componentRef.instance).componentName = data.componentName;
  
  // 2. Attach component to the appRef so that it's inside the ng component tree
  this.appRef.attachView(componentRef.hostView);
  
  // 3. Get DOM element from component
  const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  
  // 4. Append DOM element to the body
  var tr = document.createElement("tr");
  tr.appendChild(domElem);
  let selectedRow = selected;//.closest(".ng2-smart-row");
  if(selectedRow){
    let nextSib = this.renderer.nextSibling(selectedRow);
    this.renderer.insertBefore(selectedRow.parentNode, tr, nextSib);
  }

/*
  (<HelloComponent>componentRef.instance).closeRow.subscribe(() => {
    console.log("close event");
    this.removeComponent(componentRef);
  });
  */


  return componentRef;
}

removeComponent(component: any){
  this.appRef.detachView(component.hostView);
  component.destroy();
}

}