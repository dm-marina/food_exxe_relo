import{NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { MainComponent } from './main/main.component';

const appRoutes:Routes = [
    {path:'', component:MainComponent, pathMatch: 'full'},
    { path:'menu', 
    loadChildren:()=>
    import('./menu/menu.module').then(m=>m.MenuModule)}
] 

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule{}