import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish.model';
import { DishService } from '../dish.service';
import { ActivatedRoute,  Params } from '@angular/router';
import { BasketService } from '../basket/basket.service';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss']
})
export class DishItemComponent implements OnInit{
  dish!:Dish;
  id!:number;
  flag:boolean = true;
  constructor(private dishService:DishService,
    private route:ActivatedRoute,
    private basketService:BasketService){}
  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.dish = this.dishService.getDish(this.id)
      }
    )    
  }

  onAddToBasket(){
      if(this.flag){
        this.basketService.addToBasket(this.dish)
        this.flag=false;
      }
  }
  

}
