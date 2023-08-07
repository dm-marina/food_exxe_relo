export class BookingModel{
    private name:string;
    private tel:string;
    private guests:number;
    private time: Date;

    constructor(name:string, tel:string, guests:number, time:Date){
        this.name = name;
        this.tel = tel;
        this.guests = guests;
        this.time = time;
    }
}