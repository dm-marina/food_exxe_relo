import { NgModule } from "@angular/core";
import { LeftMenuComponent } from "../left-menu/left-menu.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactsComponent } from "../contacts/contacts.component";
import { BurgerMenuComponent } from "../left-menu/burger-menu/burger-menu.component";
import { CounterComponent } from './counter/counter.component';
import { BookingComponent } from "../booking/booking.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { AlertComponent } from "./alert/alert.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        LeftMenuComponent,
        FooterComponent,
        ContactsComponent,
        BurgerMenuComponent,
        CounterComponent,
        BookingComponent,
        PlaceholderDirective,
        AlertComponent,
        CounterComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports:[
        LeftMenuComponent,
        FooterComponent,
        ContactsComponent,
        BurgerMenuComponent,
        CounterComponent,
        BookingComponent,
        PlaceholderDirective,
        AlertComponent,
        CounterComponent 
    ]

})
export class SharedModule{}