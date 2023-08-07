import { Component, OnInit } from '@angular/core';
import { Dish } from './dish.model';
import { Subscription } from 'rxjs';
import { DishService } from './dish.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  dishes!:Dish[];
  dishMenuName!:string;
  dishSubscr!: Subscription;

  constructor(private dishService:DishService,
      private route:ActivatedRoute){}

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
