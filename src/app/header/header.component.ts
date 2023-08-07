import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { BasketComponent } from '../menu/basket/basket.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../auth/auth.service';
import { AccountComponent } from '../auth/account/account.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements  OnInit,OnDestroy {
  basketComp!:BasketComponent;
  authComp!:AuthComponent;
  accountComp!: AccountComponent;
  @ViewChild(PlaceholderDirective, {static:false}) alertHost!:PlaceholderDirective;
  private closeSub!:Subscription;
  private userSub!:Subscription;
  isAuthenticated=false;

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      user=>{
        this.isAuthenticated = !user? false:true;
      }
    )
  }

  openMenu(basketComp:BasketComponent){
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const compRef = hostViewContainerRef.createComponent(BasketComponent);
    compRef.instance.basketComp = basketComp;
    this.closeSub=compRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }
  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
    this.userSub.unsubscribe();
  }
  openAuth(authComp:AuthComponent){
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const compRef = hostViewContainerRef.createComponent(AuthComponent);
    compRef.instance.authComp = authComp;
    this.closeSub=compRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }
  openAccountInform(accountComp:AccountComponent){
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const compRef = hostViewContainerRef.createComponent(AccountComponent);
    compRef.instance.accountComp = accountComp;
    this.closeSub=compRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }
}
