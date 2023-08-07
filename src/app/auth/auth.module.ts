import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { AccountComponent } from "./account/account.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
        AuthComponent,
        AccountComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    exports:[
        AuthComponent,
        AccountComponent
    ]

})
export class AuthModule{}