import { NgModule } from "@angular/core";
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from "./menu.component";
import { MenuItemComponent } from "./menu-item-list/menu-item/menu-item.component";
import { DishMenuComponent } from "./dish-menu/dish-menu.component";
import { DishItemComponent } from "./dish-item/dish-item.component";
import { MenuItemListComponent } from "./menu-item-list/menu-item-list.component";
import { DrinksComponent } from "./drinks/drinks.component";
import { DrinkItemComponent } from "./drinks/drink-item/drink-item.component";
import { BasketComponent } from "./basket/basket.component";
import { BasketItemComponent } from "./basket/basket-item/basket-item.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { MenuRoutingModule } from "./menu-routing.module";

@NgModule({
    declarations:[
        HeaderComponent,
        MenuComponent,
        MenuItemComponent,
        DishMenuComponent,
        DishItemComponent,
        MenuItemListComponent,
        DrinksComponent,
        DrinkItemComponent,
        BasketComponent,
        BasketItemComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        SharedModule,
        MenuRoutingModule
    ]  
})
export class MenuModule{}