export class Drinks{
    public name:string;
    public type:string;
    public description:string;
    public price:number;
    public imgPath: string;
    public quantity:number;

    constructor( name:string, type:string, description:string, price:number, imgPath:string, quantity:number){
        this.name = name;
        this.type = type;
        this.description = description;
        this.price = price;
        this.imgPath = imgPath;
        this.quantity = quantity;
    }


}