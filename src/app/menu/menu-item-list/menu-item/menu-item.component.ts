import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../../dish.model';
import { BasketService } from '../../basket/basket.service';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent{
  @Input() dish!:Dish;
  @Input() index!:number;
  flag:boolean = true;

  constructor(private basketService: BasketService){}

  onAddToBasket(){
    if(this.flag){
      this.basketService.addToBasket(this.dish)
      this.flag=false;
    }
  }
 
  


}
