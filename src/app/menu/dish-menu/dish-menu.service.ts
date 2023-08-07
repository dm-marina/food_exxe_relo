import { Injectable, Input, Output, OnInit } from '@angular/core';
import { DishMenuModel } from './dish-menu.model';
import { Subject } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({providedIn:'root'})
export class DishMenuService{

    dishMenuName!:string;
    dishesMenuChanged = new Subject<DishMenuModel[]>();

    constructor(private route:ActivatedRoute, private router:Router){}
    
  dishesMenu:DishMenuModel[] = [
    new DishMenuModel('Завтраки'),
    new DishMenuModel('Raw'),
    new DishMenuModel('Холодные закуски'),
    new DishMenuModel('Брускетты'),
    new DishMenuModel('К вину'),
    new DishMenuModel('Салаты'),
    new DishMenuModel('Супы'),
    new DishMenuModel('Паста и ризотто'),
    new DishMenuModel('Мясо'),
    new DishMenuModel('Рыба'),
    new DishMenuModel('Grill'),
    new DishMenuModel('Гарниры')
  ]
  private name!:string;
  getDishesMenu(){
    return this.dishesMenu.slice()
  }
}