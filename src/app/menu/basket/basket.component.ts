import { Component, Input, Output, EventEmitter, OnInit, } from '@angular/core';
import { Dish } from '../dish.model';
import { Subscription } from 'rxjs';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{
  basket!:any ;
  index!:number;
  subscription!:Subscription;
  cost = this.basketService.cost();

  @Input() basketComp!:BasketComponent;
  @Output() close = new EventEmitter<void>();

  onClose(){
    this.close.emit();
  }
  constructor(private basketService:BasketService){}

  ngOnInit() {
    this.basket = this.basketService.getAllFromBasket();
    this.subscription = this.basketService.basketChanged
      .subscribe(
        (basket: Dish[]) => {
          this.basket = basket;
        }
      );
  }
  
}
