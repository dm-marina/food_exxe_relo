import { Component } from '@angular/core';
import { Drinks } from './drinks.model';
import { Subscription } from 'rxjs';
import { DrinksService } from './drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent {
  drinks!:Drinks[];
  drinkSubscr!: Subscription;

  constructor(private drinksService:DrinksService){}

  ngOnInit(): void {
    this.drinkSubscr = this.drinksService.drinksChanged
    .subscribe( 
      (drinks: Drinks[])=>{
        this.drinks = drinks;
      }
    );
    this.drinks = this.drinksService.getDrinks();
  }
}
