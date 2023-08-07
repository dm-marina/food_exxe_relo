import {Injectable, Input} from '@angular/core'
import { Subject } from 'rxjs';
import { Dish } from './dish.model'
import { Addition } from './addition.model';
@Injectable({
    providedIn:'root'
})
export class DishService{
    dishMenuName!:number;
    @Input() newQuantity!:number;
    dishesChanged = new Subject<Dish[]>();

    private dishes: Dish[]=[
        new Dish(
            'Яичница-глазунья из трех яиц', 'assets/images/egg3.svg', 250, 400,
            [
                new Addition('Тигровые креветки 60 г', 450),
                new Addition('Томаты / паприка', 80),
                new Addition('Бекон', 120),
                new Addition('Сыр чеддер 30 г', 80)
            ],
            'Завтраки', 1
        ),
        new Dish('Омлет из трёх яиц', 'assets/images/omlete.svg',250, 500,
            [
                new Addition('Тигровые креветки 60 г', 450),
                new Addition('Томаты / паприка', 80),
                new Addition('Бекон', 120),
                new Addition('Сыр чеддер 30 г', 80)
            ],
            'Завтраки', 1
        ),
        new Dish('Домашние сырники', 'assets/images/cheesecakes.svg', 490, 450,
            [
                new Addition('Малина', 100),
                new Addition('Джем', 80),
                new Addition('Клубника', 100),
                new Addition('Сметана', 260)
            ],
            'Завтраки',1
        ),
        new Dish('Блины', 'assets/images/pancakes.svg', 190, 150,
            [
                new Addition('Малина', 100),
                new Addition('Джем', 80),
                new Addition('Клубника', 100),
                new Addition('Сметана', 260)
            ],
            'Завтраки',1
        ),
        new Dish('Каша c ягодами и кедровыми орехами', 'assets/images/sereal.svg', 450, 380,
            [
                new Addition('Малина', 100),
                new Addition('Джем', 80),
                new Addition('Клубника', 100),
                new Addition('Сметана', 260)
            ],
            'Завтраки',1   
        ),
        new Dish('Скрэмбл', 'assets/images/scramble.svg', 290, 250,
            [
                new Addition('Тигровые креветки 60 г', 450),
                new Addition('Томаты / паприка', 80),
                new Addition('Бекон', 120),
                new Addition('Сыр чеддер 30 г', 80)
            ],
            'Завтраки',1
        ),
        new Dish('Яйцо Бенедикт с лососем', 'assets/images/egg_salmon.svg', 850, 250,
            [
                new Addition('Тигровые креветки 60 г', 450),
                new Addition('Томаты / паприка', 80),
                new Addition('Бекон', 120),
                new Addition('Сыр чеддер 30 г', 80)
            ],
            'Завтраки',1
        ),
        new Dish('Яйцо Бенедикт с беконом', 'assets/images/egg_bacon.svg', 650, 250,
            [
                new Addition('Тигровые креветки 60 г', 450),
                new Addition('Томаты / паприка', 80),
                new Addition('Бекон', 120),
                new Addition('Сыр чеддер 30 г', 80)
            ],
            'Завтраки',1
        ),
        new Dish('Гречневая каша с авокадо, яйцом пашот и пармезаном', 'assets/images/buckwheat.svg', 490, 400,
            [
                new Addition('Тигровые креветки 60 г', 450),
                new Addition('Томаты / паприка', 80),
                new Addition('Бекон', 120),
                new Addition('Сыр чеддер 30 г', 80)
            ],
            'Завтраки',1
        ),
        new Dish('Кобб – салат с лососем', 'assets/images/salad_salmon.svg', 890, 420,
            [
                new Addition('Тигровые креветки 60 г', 450),
                new Addition('Томаты / паприка', 80),
                new Addition('Бекон', 120),
                new Addition('Сыр чеддер 30 г', 80)
            ],
            'Завтраки',1
        ),
        new Dish('Кобб – салат с креветками', 'assets/images/salad_shrimp.svg', 960, 450,
            [
                new Addition('Тигровые креветки 60 г', 450),
                new Addition('Томаты / паприка', 80),
                new Addition('Бекон', 120),
                new Addition('Сыр чеддер 30 г', 80)
            ],
            'Завтраки',1
        ),
    ]

    getDishes(){
        return this.dishes.slice();
    }   
    getDish(index:number){
        return this.dishes[index];
    }
    getQuantity(){
        for(let dishEl of this.dishes){
            return dishEl.quantity;
        }
        return;
    }
    
}