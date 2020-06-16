import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Main22AsideFooterComponent } from './main22-aside-footer/main22-aside-footer.component';
import { Main23AsideFooterComponent } from './main23-aside-footer/main23-aside-footer.component';
import { Main22FooterComponent } from './main22-footer/main22-footer.component';
import { Main23FooterComponent } from './main23-footer/main23-footer.component';
import { Main22Component } from './main22/main22.component';
import { Main23Component } from './main23/main23.component';
import { Main33Component } from './main33/main33.component';



@NgModule({
  declarations: [Main22AsideFooterComponent, Main23AsideFooterComponent, Main22FooterComponent, Main23FooterComponent, Main22Component, Main23Component, Main33Component],
  imports: [
    CommonModule
  ]
})
export class GridLayoutModule { }
