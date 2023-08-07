import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "./menu.component";
import { DrinksComponent } from "./drinks/drinks.component";
import { MenuItemListComponent } from "./menu-item-list/menu-item-list.component";
import { DishItemComponent } from "./dish-item/dish-item.component";
import { NgModule } from "@angular/core";

const routes:Routes=[
    {path:'', component:MenuComponent, 
        children:[
            {path: 'drinks', component:DrinksComponent},
            {path:':id', component:MenuItemListComponent},
            {path:':id/:id', component: DishItemComponent},
        ]}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class MenuRoutingModule{}