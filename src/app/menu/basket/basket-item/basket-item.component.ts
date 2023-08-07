import { Component, Input } from '@angular/core';
import { Dish } from '../../dish.model';
import { BasketService } from '../basket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent {
  @Input() dish!:Dish ;
  @Input() id!: number;
  @Input() basket!:any;
  subscription!: Subscription;
  constructor( private basketService:BasketService){}

  ngOnInit() {
    this.basket = this.basketService.getAllFromBasket();
    this.subscription = this.basketService.basketChanged
      .subscribe(
        (basket: Dish[]) => {
          this.basket = basket;
        }
      );
  }

  onDelete(){
    this.basketService.deleteFromBasket(this.id);
  }
}
