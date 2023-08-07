import { Component } from '@angular/core';
import { Dish } from '../dish.model';
import { Subscription } from 'rxjs';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.scss']
})
export class MenuItemListComponent {
  dishes!:Dish[];
  dishSubscr!: Subscription;

  constructor(private dishService:DishService){}

  ngOnInit(): void {
    this.dishSubscr = this.dishService.dishesChanged
    .subscribe( 
      (dishes: Dish[])=>{
        this.dishes = dishes;
      }
    );
    this.dishes = this.dishService.getDishes();
  }
}
