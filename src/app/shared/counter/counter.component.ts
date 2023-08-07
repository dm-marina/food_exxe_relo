import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/menu/dish.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{
  res:any;
  dishes = this.dishService.getDishes();
  quantity = this.dishService.getQuantity();
  constructor(private dishService:DishService){}
  onIncrement(){
      if(this.quantity!==undefined){
        this.res = this.quantity++;
        for(let dishEl of this.dishes){
          dishEl.quantity = this.res;
        }
      }
      return this.res;
  }

  onDecrement(){
    if(this.quantity!==undefined && this.quantity<=1){
     return this.res= 1;
    }
    if(this.quantity!==undefined){
      this.res =  this.quantity--;
      return this.res
    }
    return this.res;
  }
  ngOnInit(): void {
    this.res = this.quantity
  }
}
