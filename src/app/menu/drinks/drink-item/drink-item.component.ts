import { Component, Input } from '@angular/core';
import { Drinks } from '../drinks.model';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.scss']
})
export class DrinkItemComponent {
  @Input() drink!:Drinks;
  @Input() index!:number;
  flag:boolean = true;

  constructor(private basketService: BasketService){}

  onAddToBasket(){
    if(this.flag){
      this.basketService.addToBasket(this.drink)
      this.flag=false;
    }
  }
  
}
