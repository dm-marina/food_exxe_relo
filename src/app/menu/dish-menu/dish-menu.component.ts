import { Component} from '@angular/core';
import { DishMenuModel } from './dish-menu.model';
import { DishMenuService } from './dish-menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dish-menu',
  templateUrl: './dish-menu.component.html',
  styleUrls: ['./dish-menu.component.scss']
})
export class DishMenuComponent {
  dishesMenu!: DishMenuModel[];
  dishMenuSubscr!:Subscription;
  constructor(
    private dishMenuService: DishMenuService){}

    ngOnInit(): void {
      this.dishMenuSubscr = this.dishMenuService.dishesMenuChanged
      .subscribe( 
        (dishesMenu: DishMenuModel[])=>{
          this.dishesMenu = dishesMenu;
        }
      );
        this.dishesMenu = this.dishMenuService.getDishesMenu();
    }

   

   

 

}
