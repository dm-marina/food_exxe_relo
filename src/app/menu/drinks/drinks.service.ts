import { Injectable } from "@angular/core";
import { Drinks } from "./drinks.model";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class DrinksService{
    drinksChanged = new Subject<Drinks[]>();
    private drinks:Drinks[]=[
        new Drinks('Кофе', 'non-alcohol', 'Лучшее кофе в городе', 50, '/assets/images/coffee.jpg',1),
        new Drinks('Ягодный лимонад', 'non-alcohol', 'Освежающий вкус', 150, '/assets/images/berries_lemonade.jpg',1),
        new Drinks('coke', 'non-alcohol', 'original tasty', 90, '/assets/images/coke.jpg',1),
        new Drinks('Лимонад', 'non-alcohol', 'original tasty', 130, '/assets/images/lemonade.jpg',1),
        new Drinks('Тропики', 'alcohol', 'original tasty', 280, '/assets/images/alcohol-coctail.jpg',1),
        new Drinks('Голубая лагуна', 'alcohol', 'original tasty', 330, '/assets/images/coctail-blue.jpg',1),
        new Drinks('Джин-тоник', 'alcohol', 'original tasty', 350, '/assets/images/gin-tonik.jpg',1),
        new Drinks('Лонг-Айленд', 'alcohol', 'original tasty', 350, '/assets/images/long.jpg',1),
        new Drinks('Виноградное вино', 'alcohol', 'original tasty', 280, '/assets/images/red-wine.jpg',1),
        new Drinks('Клубничное вино', 'alcohol', 'original tasty', 300, '/assets/images/wine.jpg',1),
        new Drinks('Шоты', 'alcohol', 'original tasty', 220, '/assets/images/shot.jpg',1),
    ]

    getDrinks(){
        return this.drinks.slice();
    }
    getDrink(index:number){
        return this.drinks[index];
    }

}