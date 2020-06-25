import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficheurComponent } from './afficheur/afficheur.component';


const routes: Routes =[{
  path:'',
  component: AfficheurComponent    
}] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfficheurRoutingModule { }
