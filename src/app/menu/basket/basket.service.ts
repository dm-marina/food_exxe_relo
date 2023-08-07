import { Injectable, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Dish } from '../dish.model';
import { Drinks } from '../drinks/drinks.model';

@Injectable({
    providedIn: 'root'
})
export class BasketService{
    basketChanged = new Subject<any>();
    id!:number;
    public basket:Dish[] | Drinks[]=[]
    @Input()costValue!:number;


    getAllFromBasket() {
        return this.basket.slice();
    }
    
    getItemFromBasket(index: number) {
        return this.basket[index];
    }

    addToBasket(dish:any){
        this.basket.push(dish);
        this.basketChanged.next(this.basket.slice())   
    }

    cost(){
        let costValue = 0
        if(this.basket.length === 0){
            return costValue = 0
        }
        if(this.basket.length>0){
            for(let i=0;i<this.basket.length;i++){
                for(let basketItem of this.basket){
                    if(basketItem.quantity!==undefined){
                        this.basketChanged.next(this.basket.slice())
                         costValue += basketItem.price*basketItem.quantity;
                        
                    }
                }
                return costValue
            }
        }
        return this.costValue = costValue;
    }

    deleteFromBasket(index:number){
        this.basket.splice(index, 1); 
        this.basketChanged.next(this.basket.slice());
         
    }
}