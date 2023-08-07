import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { BookingModel } from './booking.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  @Input() booking!:BookingComponent;
  @Output() close = new EventEmitter<void>();

  bookingListChanged = new Subject<BookingModel[]>(); 

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute){}

  private bookingList:BookingModel[]=[];
  onClose(){
    this.close.emit();
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      return
    }
    this.addBooking(form.value)
    this.postBooking();
    this.onClose();
  }
  addBooking(bookingItem:BookingModel){
    this.bookingList.push(bookingItem);
    this.bookingListChanged.next(this.bookingList.slice());
  }
  getBookingList(){
    return this.bookingList.slice()
  }

  postBooking(){
    const bookingList = this.getBookingList();
    this.http.post('https://food-exe-default-rtdb.firebaseio.com/booking.json',
    bookingList)
    .subscribe(response => {
      console.log(response);
    });
  }
  onMain(){
    this.router.navigate([''], {relativeTo:this.route})
  }

}
