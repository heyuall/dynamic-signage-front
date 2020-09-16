import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {ModuleWithProviders} from '@angular/core';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { Main22AsideFooterComponent } from './main22-aside-footer/main22-aside-footer.component';
import { GridLayoutComponent } from './grid-layout.component';
import { GridLayoutModule } from './grid-layout.module';
import { Main22Component } from './main22/main22.component';
import { Main23Component } from './main23/main23.component';
const routes: Routes = [
    {
        path: '',
        component: GridLayoutComponent,

        children: [
            { path: 'main22-aside-footer', component: Main22AsideFooterComponent },
            {path:'main22',component:Main22Component},
            {path: 'main23',component:Main23Component}
        ],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class GridLayoutRoutingModule { }

