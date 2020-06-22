import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutManagerComponent } from './layout-manager/layout-manager.component';


const routes: Routes =[{
    path:'',
    component: LayoutManagerComponent    
}] ;


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class LayoutManagerRoutingModule { }
  