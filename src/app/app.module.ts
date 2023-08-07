import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InformationComponent } from './main/information/information.component';
import { PromoComponent } from './main/promo/promo.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InformationComponent,
    PromoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenuModule,
    SharedModule, 
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
