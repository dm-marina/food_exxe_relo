import { Component, ViewChild } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  booking!:BookingComponent;
  @ViewChild(PlaceholderDirective, {static:false}) alertHost!: PlaceholderDirective;
    private closeSub!: Subscription;

  openBooking(booking:BookingComponent){
    const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        const compRef = hostViewContainerRef.createComponent(BookingComponent);
        compRef.instance.booking = booking;
        this.closeSub=compRef.instance.close.subscribe(()=>{
          this.closeSub.unsubscribe();
          hostViewContainerRef.clear();
        });
  }
  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }
}
