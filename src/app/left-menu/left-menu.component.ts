import { Component, ViewChild } from '@angular/core';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  burger!:BurgerMenuComponent;
  @ViewChild(PlaceholderDirective, {static:false}) alertHost!: PlaceholderDirective;
    private closeSub!: Subscription;

    constructor(private router:Router, private route:ActivatedRoute){}
  openBurger(burger:BurgerMenuComponent){
    const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        const compRef = hostViewContainerRef.createComponent(BurgerMenuComponent);
        compRef.instance.burger = burger;
        this.closeSub=compRef.instance.close.subscribe(()=>{
          this.closeSub.unsubscribe();
          hostViewContainerRef.clear();
        });
  }
  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }
  onMain(){
    this.router.navigate([''], {relativeTo:this.route})
  }
 
}
