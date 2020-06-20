import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {ModuleWithProviders} from '@angular/core';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { Main22AsideFooterComponent } from './main22-aside-footer/main22-aside-footer.component';
import { GridLayoutComponent } from './grid-layout.component';
import { GridLayoutModule } from './grid-layout.module';
const routes: Routes = [
    {
        path: '',
        component: GridLayoutComponent,

        children: [
            { path: 'main22-aside-footer', component: Main22AsideFooterComponent }
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

