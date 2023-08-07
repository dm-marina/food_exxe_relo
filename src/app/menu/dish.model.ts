import { Addition } from "./addition.model";

export class Dish{
    public name:string;
    public imgPath:string;
    public price:number;
    public weight: number;
    public additions: Addition[];
    public type: string;
    public quantity:number;

    constructor(
        name:string, 
        imgPath:string, 
        price:number, 
        weight:number, 
        additions:Addition[], 
        type:string, 
        quantity:number){
        this.name = name;
        this.imgPath = imgPath;
        this.price = price;
        this.weight = weight;
        this.additions = additions;
        this.type = type;
        this.quantity = quantity;
    }
}